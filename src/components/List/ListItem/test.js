import { render, screen, fireEvent } from '@testing-library/react';
import ListItem from '.';

test('Testing ListItem', () => {
    const dummy_item = {
        id: 23,
        name:{
            first:"Jefferson",
            last:"Peña"
        },
        address:"Calle siempre viva 123",
        email:"jefferson.pena@fake.com",
        picture:{
            thumbnail: "jefferson_image_dummy.png"
        }
    }
    const {container} = render(<ListItem key={dummy_item.id} item={dummy_item}/>);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("+ 0");

    const btn = container.querySelector("button");
    const value = container.firstChild.querySelector("button")

    expect(value).toHaveTextContent("+ 0");
    fireEvent.click(btn)
    expect(value).toHaveTextContent("+ 1");
    fireEvent.click(btn)
    expect(value).toHaveTextContent("+ 2");

});

