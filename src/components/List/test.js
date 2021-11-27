import { render, screen, fireEvent } from '@testing-library/react';
import List from '.';

test('Testing List', () => {
    const dummy_item_list = [{
        id: {
            value:23
        },
        name:{
            first:"Jefferson",
            last:"Peña"
        },
        address:"Calle siempre viva 123",
        email:"jefferson.pena@fake.com",
        picture:{
            thumbnail: "jefferson_image_dummy.png"
        }
    }]
    const {container} = render(<List list={dummy_item_list}/>);
    expect(container.querySelector('ul'))
});

