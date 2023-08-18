import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import StudentsSchedule from '../StudentSchedule/StudentSchedule';

const tableHeadColumns = ['Name', 'Active', 'Schedule', 'Rate ($/hr.)'];

const mockStudentData = [
  {
    name: 'Active Student',
    schedule: [
      { day: 'Mon', active: true, time: '10-12' },
      { day: 'Tue', active: false, time: '' },
      { day: 'Wed', active: true, time: '10-12' },
      { day: 'Thu', active: false, time: '' },
      { day: 'Fri', active: true, time: '10-12' },
      { day: 'Sat', active: false, time: '' },
      { day: 'Sun', active: false, time: '' },
    ],
    rate: 50,
    active: true,
  },
  {
    name: 'Inactive Student',
    schedule: [
      { day: 'Mon', active: true, time: '10-12' },
      { day: 'Tue', active: false, time: '' },
      { day: 'Wed', active: true, time: '10-12' },
      { day: 'Thu', active: false, time: '' },
      { day: 'Fri', active: true, time: '10-12' },
      { day: 'Sat', active: false, time: '' },
      { day: 'Sun', active: false, time: '' },
    ],
    rate: 50,
    active: false,
  },
];

const StudentsTable = () => {
  const RenderStudentData = ({ studentData }: { studentData: any }) => {
    return studentData.map((row) => {
      return (
        <TableRow>
          <TableCell align='center'>{row.name}</TableCell>
          <TableCell align='center'>
            <Chip
              label={row.active ? 'Active' : 'Inactive'}
              color={row.active ? 'success' : 'error'}
            />
          </TableCell>
          <TableCell align='center'>
            <StudentsSchedule schedule={row.schedule} active={row.active} />
          </TableCell>
          <TableCell align='center'>{row.rate}</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <TableContainer data-testid='students-table'>
      <Table size='small'>
        <TableHead>
          <TableRow data-testid='students-table-head'>
            {tableHeadColumns.map((column) => {
              return <TableCell align='center'>{column}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <RenderStudentData studentData={mockStudentData} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentsTable;
