import { describe, test, expect } from 'vitest';
import { render, screen } from '../../../test-utils';
import StudentSchedule from './StudentSchedule';

const mockStudentSchedule = [
  { day: 'Mon', active: true },
  { day: 'Tue', active: false },
  { day: 'Wed', active: true },
  { day: 'Thu', active: false },
  { day: 'Fri', active: true },
  { day: 'Sat', active: false },
  { day: 'Sun', active: false },
];

describe('Tests for the Student Schedule component', () => {
  beforeEach(() => {
    render(<StudentSchedule schedule={mockStudentSchedule} />);
  });
  test('presence of the component', () => {
    const schedule = screen.findByTestId('students-schedule');
    expect(schedule).not.toBeNull();
  });
});
