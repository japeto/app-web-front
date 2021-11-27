import { render, screen, fireEvent} from '@testing-library/react';
import Form from '.';

const setup = () => {
    const container = render(<Form />);
    let inputName = container.getByLabelText('fname')
    return {
        inputName,
      ...container,
    }
  }

test('Testing form', () => {
  const name = "Jefferson"  
  const {inputName} = setup()  
  fireEvent.change(inputName, {target: {value: name}})
  expect(inputName.value).toBe(name)
});
