import { action, type KeyDownEvent, SingletonAction, WillAppearEvent, streamDeck, type TitleParametersDidChangeEvent, DidReceiveSettingsEvent } from "@elgato/streamdeck";

/**
 * An example action class that displays a count that increments by one each time the button is pressed.
 */
@action({ UUID: "dev.codingcat.streamdeck.increment2" })
export class IncrementCounter2 extends SingletonAction<CounterSettings> {
	constructor() {
		super();
		streamDeck.settings.onDidReceiveGlobalSettings<CounterSettings>((ev) => {
			streamDeck.logger.debug('onDidReceiveGlobalSettings-IncrementCounter2', ev);
			this.actions.forEach(action => {
				action.setTitle(`${ev.settings.count ?? 0}`);
			});
		});
	}

	override async onWillAppear(ev: WillAppearEvent<CounterSettings>): Promise<void> {
		let { count } = await streamDeck.settings.getGlobalSettings<CounterSettings>();
		streamDeck.logger.debug('onWillAppear-IncrementCounter2', { count });
		await ev.action.setTitle(`${count ?? 0}`);
	}

	override async onKeyDown(ev: KeyDownEvent<CounterSettings>): Promise<void> {
		// Update the count from the settings.
		let { count: currentCount, incrementBy: currentIncrementBy } = await streamDeck.settings.getGlobalSettings<CounterSettings>();
		const incrementBy = currentIncrementBy ?? 1;
		const count = (currentCount ?? 0) + incrementBy;

		streamDeck.logger.debug('onKeyDown-IncrementCounter2', { count, incrementBy });
		await streamDeck.settings.setGlobalSettings({ count, incrementBy });

		//TODO: This is a workaround to ensure the settings updating calls onDidReceiveGlobalSettings.
		await streamDeck.settings.getGlobalSettings<CounterSettings>();
	}
}

/**
 * Settings for {@link IncrementCounter2}.
 */
type CounterSettings = {
	count?: number;
	incrementBy?: number;
};
