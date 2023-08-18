import { Button, Card, CardActions, CardContent } from '@mui/material';
import StudentsTable from '../../components/StudentsTable/StudentsTable';

const Home = () => {
  return (
    <Card raised>
      <CardContent>
        <StudentsTable />
      </CardContent>
      <CardActions>
        <Button data-testid='add-student-button' variant='outlined'>
          Add Student
        </Button>
      </CardActions>
    </Card>
  );
};

export default Home;
