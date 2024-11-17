import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import NumberOfEvents from '../components/NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('User does not type in the number-of-events field', ({ given, when, then }) => {
        let AppComponent;
        let EventListDOM;
        given('I am a user,', () => {
            AppComponent = render(<App />);

        });

        when('I have not typed a number on number-of-events field', () => {
            // eslint-disable-next-line testing-library/no-node-access
            const AppDOM = AppComponent.container.firstChild;
            // eslint-disable-next-line testing-library/no-node-access
            const EventListDOM = AppDOM.querySelector('#event-list');
        });

        then('I should see a list of 32 events',async () => {
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
              });
        });
    });

    test('User types a number in the number-of-events field', ({ given, when, then }) => {
        let AppComponent;
        let EventListDOM;
        given('I am a user,', () => {
            AppComponent = render(<App />);

        });

        when('I type a number on number-of-events field', async () => {
            // const user = userEvent.setup();
            // const allEvents = await getEvents();
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const NumberOfEventsComponent = render(<NumberOfEvents currentNOE={3} />)
        // const showDetails = EventComponent.queryByText('Show details');
        // await user.click(showDetails);
        });

        then('I should be able to see a list of events with the number I typed as the length',async () => {
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(3);
              });  
        });
    });
 
});