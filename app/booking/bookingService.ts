export type SlotStatus = 'available' | 'booked' | 'filling-fast' | 'unavailable';

export type BookingSlot = {
  id: string;
  period: 'Morning' | 'Afternoon' | 'Evening';
  time: string;
  duration: number;
  price: number;
  status: SlotStatus;
};

export const bookingDurations = [60, 120, 180] as const;

export type Court = {
  id: 'court-1' | 'court-2' | 'court-3' | 'court-4';
  number: string;
  name: string;
  type: string;
};

export const courts: Court[] = [
  { id: 'court-1', number: '01', name: 'Court 01', type: 'Standard court' },
  { id: 'court-2', number: '02', name: 'Court 02', type: 'Competition court' },
  { id: 'court-3', number: '03', name: 'Court 03', type: 'Covered court' },
  { id: 'court-4', number: '04', name: 'Court 04', type: 'Academy court' },
];

const slotTemplate = [
  ['Morning', '06:00 AM', 300], ['Morning', '06:30 AM', 300], ['Morning', '07:00 AM', 325],
  ['Afternoon', '03:00 PM', 325], ['Afternoon', '03:30 PM', 325],
  ['Evening', '06:00 PM', 350], ['Evening', '06:30 PM', 350], ['Evening', '07:00 PM', 350],
  ['Evening', '07:30 PM', 350], ['Evening', '08:00 PM', 350], ['Evening', '08:30 PM', 350], ['Evening', '09:00 PM', 325],
] as const;

function dateSeed(date: string) {
  return date.split('-').reduce((total, value) => total + Number(value), 0);
}

/** Mock availability adapter. Replace this function with a future booking API call. */
export function getBookingAvailability(date: string): Record<Court['id'], BookingSlot[]> {
  const seed = dateSeed(date);

  return courts.reduce((availability, court, courtIndex) => {
    const soldOut = court.id === 'court-4' && seed % 3 === 0;
    availability[court.id] = slotTemplate.map(([period, time, price], slotIndex) => {
      const pattern = (seed + courtIndex * 3 + slotIndex * 2) % 11;
      const status: SlotStatus = soldOut
        ? 'booked'
        : pattern === 0
          ? 'booked'
          : pattern === 1
            ? 'filling-fast'
            : pattern === 10
              ? 'unavailable'
              : 'available';
      return {
        id: `slot-${slotIndex}`,
        period,
        time,
        duration: 30,
        price,
        status,
      };
    });
    return availability;
  }, {} as Record<Court['id'], BookingSlot[]>);
}

export function availableSlotCount(slots: BookingSlot[]) {
  return slots.filter((slot) => slot.status === 'available' || slot.status === 'filling-fast').length;
}

function timeInMinutes(time: string) {
  const [clock, suffix] = time.split(' ');
  const [rawHours, minutes] = clock.split(':').map(Number);
  const hours = rawHours % 12 + (suffix === 'PM' ? 12 : 0);
  return hours * 60 + minutes;
}

/** Returns true only if every 30-minute interval in the requested window can be booked. */
export function hasContinuousAvailability(slots: BookingSlot[], startSlotId: string, duration: number) {
  const start = slots.find((slot) => slot.id === startSlotId);
  if (!start) return false;
  const startTime = timeInMinutes(start.time);
  const intervals = duration / 30;
  return Array.from({ length: intervals }, (_, index) => startTime + index * 30).every((time) =>
    slots.some((slot) => timeInMinutes(slot.time) === time && (slot.status === 'available' || slot.status === 'filling-fast')),
  );
}

export function availableCourtCountForWindow(availability: Record<Court['id'], BookingSlot[]>, startSlotId: string, duration: number) {
  return courts.filter((court) => hasContinuousAvailability(availability[court.id], startSlotId, duration)).length;
}
