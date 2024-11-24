/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import NumberOfEvents from '../components/NumberOfEvents';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from "../api";


describe('<NumberOfEvents /> Component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(
            <NumberOfEvents
                currentNOE={32} 
                setCurrentNOE={() => {}}
                setInfoAlert={() => { }}
                setErrorAlert={() => {}}
            />
        );
    });

    test('component contains input textbox', () => {
        const input = NumberOfEventsComponent.queryByRole('textbox');
        expect(input).toBeInTheDocument();
    });
    
    test('ensures the default value of textbox is 32', () => {
        const input = NumberOfEventsComponent.queryByRole('textbox');
        expect(input).toHaveValue('32');
    });

    test('textbox value changes when user updates input', async () => {
        const input = NumberOfEventsComponent.getByTestId('numberOfEventsInput');
        const user = userEvent.setup();
        await user.clear(input);
        await user.type(input, '{backspace}{backspace}10');
        expect(input).toHaveValue('10');
    });
    
    test('change number of events when a user types in the textbox', async () => { 
        const numverOfEvents = NumberOfEventsComponent.getByRole('textbox');
        const user = userEvent.setup(); 
        await user.type(numverOfEvents, '{backspace}{backspace}10');   
        const allEvents = await getEvents(); 
        NumberOfEventsComponent.rerender(<NumberOfEvents setCurrentNOE={allEvents} setErrorAlert={() => {}} />);   
        expect(numverOfEvents).toHaveValue('10'); 
      }); 
});