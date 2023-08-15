import { describe, test, expect } from 'vitest';
import { render, screen } from '../../../test-utils';
import Home from './Home';

describe('Home page', () => {
  beforeAll(() => {
    render(<Home />);
  });

  test('presence of Students Table component', () => {
    const studentsTable = screen.getByTestId('students-table');
    expect(studentsTable).not.toBeNull();
  });
});
