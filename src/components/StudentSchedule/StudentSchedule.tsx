import { Chip, Stack, Typography } from '@mui/material';

interface StudentScheduleProps {
  schedule: { day: string; active: boolean; time: string }[];
  active: boolean;
}

const StudentsSchedule = ({ schedule, active }: StudentScheduleProps) => {
  return (
    <Stack data-testid='students-schedule' direction='row' spacing={1}>
      {schedule.map((row) => (
        <Chip
          disabled={!active}
          label={<Typography variant='button'>{row.day}</Typography>}
          color={row.active ? 'success' : 'error'}
          variant='outlined'
        />
      ))}
    </Stack>
  );
};

export default StudentsSchedule;
