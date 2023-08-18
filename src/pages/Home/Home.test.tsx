import { describe, test, expect } from 'vitest';
import { render, screen } from '../../../test-utils';
import Home from './Home';

describe('Home page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  describe('testing the Students Table component', () => {
    test('presence of Students Table component', () => {
      const studentsTable = screen.getByTestId('students-table');
      expect(studentsTable).not.toBeNull();
    });

    test('presence of Table Head', () => {
      const tableHead = screen.getByTestId('students-table-head');
      expect(tableHead).not.toBeNull();
    });
  });

  test('presence of Add Student Button component', () => {
    const addStudentButton = screen.getByTestId('add-student-button');
    expect(addStudentButton).not.toBeNull();
  });
});
