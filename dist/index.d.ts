export declare namespace TelegramWebApp {

    /**
     * - paid – invoice was paid successfully,
     * - cancelled – user closed this invoice without paying,
     * - failed – user tried to pay, but the payment was failed,
     * - pending – the payment is still processing.
     */

    type PaymentStatus = "paid" | "cancelled" | "failed" | "pending";

    /**
     * This object describes the native popup for requesting permission to use biometrics.
     */

    type BiometricRequestAccessParams = {
        /**
         * Optional. The text to be displayed to a user in the popup describing why the bot needs access to biometrics, 0-128 characters.
         */

        reason?: string;
    };

    /**
     * This object describes additional sharing settings for the native story editor.
     */
    type StoryShareParams = {
        /**
         * Optional. The caption to be added to the media, 0-200 characters for regular users and 0-2048 characters for premium subscribers.
         */
        text?: string;

        /**
         * Optional. An object that describes a widget link to be included in the story. 
         * Note that only premium subscribers can post stories with links.
         */
        widget_link?: StoryWidgetLink;
    };

    /**
     * This object describes a widget link to be included in the story.
     */
    type StoryWidgetLink = {
        /**
         * The URL to be included in the story.
         */
        url: string;

        /**
         * Optional. The name to be displayed for the widget link, 0-48 characters.
         */
        name?: string;
    };

    /**
     * This object describes the native popup for authenticating the user using biometrics.
     */

    type BiometricAuthenticateParams = {
        /**
         * Optional. The text to be displayed to a user in the popup describing why you are asking them to authenticate and what action you will be taking based on that authentication, 0-128 characters.
         */

        reason?: string;
    };

    type WebAppEventType = {
        /**
         * Occurs whenever theme settings are changed in the user's Telegram app (including switching to night mode).
         * eventHandler receives no parameters, new theme settings and color scheme can be received via this.themeParams and this.colorScheme respectively.
         */
        themeChanged: CustomEvent;

        /**
         * Occurs when the visible section of the Mini App is changed.
         * eventHandler receives an object with the single field isStateStable.
         * If isStateStable is true, the resizing of the Mini App is finished.
         * If it is false, the resizing is ongoing (the user is expanding or collapsing the Mini App or an animated object is playing).
         * The current value of the visible section’s height is available in this.viewportHeight.
         */
        viewportChanged: CustomEvent;

        /**
         * Occurs when the main button is pressed.
         * eventHandler receives no parameters.
         */
        mainButtonClicked: CustomEvent;

        /**
         * Occurrs when the back button is pressed.
         * eventHandler receives no parameters.
         */
        backButtonClicked: CustomEvent;

        /**
         * Occurrs when the Settings item in context menu is pressed.
         * eventHandler receives no parameters.
         */
        settingsButtonClicked: CustomEvent;

        /**
         * Occurrs when the opened invoice is closed.
         * eventHandler receives an object with the two fields:
         * 	url – invoice link provided and status – one of the invoice statuses:
         * 		- paid – invoice was paid successfully,
         * 		- cancelled – user closed this invoice without paying,
         * 		- failed – user tried to pay, but the payment was failed,
         * 		- pending – the payment is still processing. The bot will receive a service message about a successful payment when the payment is successfully paid.
         */
        invoiceClosed: CustomEvent;

        /**
         * Occurrs when the opened popup is closed.
         * eventHandler receives an object with the single field button_id – the value of the field id of the pressed button.
         * If no buttons were pressed, the field button_id will be null.
         */
        popupClosed: CustomEvent;

        /**
         *  Occurs when the QR code scanner catches a code with text data.
         *	eventHandler receives an object with the single field data containing text data from the QR code.
         */
        qrTextReceived: CustomEvent;

        /**
         * Occurs when the QR code scanner popup is closed by the user.
         * eventHandler receives no parameters.
         */
        scanQrPopupClosed: CustomEvent;

        /**
         * Occurrs when the readTextFromClipboard method is called.
         * eventHandler receives an object with the single field data containing text data from the clipboard.
         * If the clipboard contains non-text data, the field data will be an empty string.
         * If the Mini App has no access to the clipboard, the field data will be null.
         */
        clipboardTextReceived: CustomEvent;

        /**
         * Occurs when the write permission was requested.
         * eventHandler receives an object with the single field status containing one of the statuses:
         * 		- allowed – user granted write permission to the bot,
         * 		- cancelled – user declined this request.
         */
        writeAccessRequested: CustomEvent;

        /**
         * Occurrs when the user's phone number was requested.
         * eventHandler receives an object with the single field status containing one of the statuses:
         * 		- sent – user shared their phone number with the bot,
         * 		- cancelled – user declined this request.
         */
        contactRequested: CustomEvent;

        /**
         * Occurs whenever BiometricManager object is changed.
         * eventHandler receives no parameters.
         */
        biometricManagerUpdated: CustomEvent;

        /**
         * Occurs whenever biometric authentication was requested.
         * eventHandler receives an object with the field isAuthenticated containing a boolean indicating whether the user was authenticated successfully.
         * If isAuthenticated is true, the field biometricToken will contain the biometric token stored in secure storage on the device.
         */
        biometricAuthRequested: CustomEvent;

        /**
         * Occurs whenever the biometric token was updated.
         * eventHandler receives an object with the single field isUpdated, containing a boolean indicating whether the token was updated.
         */
        biometricTokenUpdated: CustomEvent;
    };

    type ThemeParams = {
        /** Optional. Background color in the #RRGGBB format.
         *
         * Also available as the CSS variable var(--tg-theme-bg-color).
         */
        bg_color?: string;

        /** Optional. Main text color in the #RRGGBB format.
         *
         * Also available as the CSS variable var(--tg-theme-text-color).
         */
        text_color?: string;

        /** Optional. Hint text color in the #RRGGBB format.
         *
         * Also available as the CSS variable var(--tg-theme-hint-color).
         */
        hint_color?: string;

        /** Optional. Link color in the #RRGGBB format.
         *
         * Also available as the CSS variable var(--tg-theme-link-color).
         */
        link_color?: string;

        /** Optional. Button color in the #RRGGBB format.
         *
         * Also available as the CSS variable var(--tg-theme-button-color).
         */
        button_color?: string;

        /** Optional. Button text color in the #RRGGBB format.
         *
         * Also available as the CSS variable var(--tg-theme-button-text-color).
         */
        button_text_color?: string;

        /** Optional. Bot API 6.1+ Secondary background color in the #RRGGBB format.
         *
         * Also available as the CSS variable var(--tg-theme-secondary-bg-color).
         */
        secondary_bg_color?: string;

        /**
         * Optional. Bot API 7.0+ Header background color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-header-bg-color).
         */
        header_bg_color?: string;

        /**
         * Optional. Bot API 7.0+ Accent text color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-accent-text-color).
         */
        accent_text_color?: string;

        /**
         * Optional. Bot API 7.6+ Section separator color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-section-separator-color).
         */
        section_bg_color?: string;

        /**
         * Optional. Bot API 7.0+ Header text color for the section in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-section-header-text-color).
         */
        section_header_text_color?: string;

        /**
         * Optional. Bot API 7.6+ Section separator color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-section-separator-color).
         */
        section_separator_color?: string;

        /**
         * Optional. Bot API 7.0+ Subtitle text color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-subtitle-text-color).
         */
        subtitle_text_color?: string;

        /**
         * Optional. Bot API 7.0+ Text color for destructive actions in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-destructive-text-color).
         */
        destructive_text_color?: string;
    };

    type PopupParams = {
        /** Optional. The text to be displayed in the popup title, 0-64 characters.
         */
        title?: string;

        /** The message to be displayed in the body of the popup, 1-256 characters.
         */
        message: string;

        /** Optional. List of buttons to be displayed in the popup, 1-3 buttons.
         *
         * Set to [{ "type": "close" }] by default.
         */
        buttons?: PopupButton[];
    };

    type ScanQrPopupParams = {
        /** Optional. The text to be displayed under the 'Scan QR' heading, 0-64 characters.
         */
        text?: string;
    };

    type PopupButton = {
        /** Optional. Identifier of the button, 0-64 characters. Set to an empty string by default.
         *
         * If the button is pressed, its id is returned in the callback and the popupClosed event.
         */
        id?: string;

        /** Optional. Type of the button. Set to "default" by default.
         * Can be one of these values:
         * - "default", a button with the default style,
         * - "ok", a button with the localized text "OK",
         * - "close", a button with the localized text "Close",
         * - "cancel", a button with the localized text "Cancel",
         * - "destructive", a button with a style that indicates a destructive action (e.g. "Remove", "Delete", etc.).
         */
        type?: "default" | "ok" | "close" | "cancel" | "destructive";

        /** Optional. The text to be displayed on the button, 0-64 charactersRequired if type is "default" or "destructive".
         *
         * Irrelevant for other types.
         */
        text?: string;
    };

    type BackButton = {
        /** Shows whether the button is visible. Set to false by default.
         */
        isVisible: boolean;

        /** Bot API 6.1+ A method that sets the button press event handler. An alias for Telegram.WebApp.onEvent('backButtonClicked', callback).
         */
        onClick(callback: Function): BackButton;

        /** Bot API 6.1+ A method that removes the button press event handler. An alias for Telegram.WebApp.offEvent('backButtonClicked', callback).
         */
        offClick(callback: Function): BackButton;

        /** Bot API 6.1+ A method to make the button active and visible.
         */
        show(): BackButton;

        /** Bot API 6.1+ A method to hide the button.
         */
        hide(): BackButton;
    };

    type MainButton = {
        /** Current button text. Set to "CONTINUE" by default.
         */
        text: string;

        /** Current button color. Set to themeParams.button_color by default.
         */
        color: string;

        /** Current button text color. Set to themeParams.button_text_color by default.
         */
        textColor: string;

        /** Shows whether the button is visible. Set to false by default.
         */
        isVisible: boolean;

        /** Shows whether the button is active. Set to true by default.
         */
        isActive: boolean;

        /** Readonly. Shows whether the button is displaying a loading indicator.
         */
        isProgressVisible: boolean;

        /** A method to set the button text.
         */

        setText(text: string): MainButton;

        /** A method that sets the button press event handler. An alias for  Telegram.WebApp.onEvent('mainButtonClicked', callback).
         */
        onClick(callback: Function): MainButton;

        /** A method that removes the button press event handler. An alias for  Telegram.WebApp.offEvent('mainButtonClicked', callback).
         */

        offClick(callback: Function): MainButton;

        /** A method to make the button visible.
         *
         * Note that opening the Mini App from the attachment menu hides the main button until the user interacts with the Mini App interface.
         */
        show(): MainButton;

        /** A method to hide the button.
         */
        hide(): MainButton;

        /** A method to enable the button.
         */
        enable(): MainButton;

        /** A method to disable the button.
         */
        disable(): MainButton;

        /** A method to show a loading indicator on the button.
         *
         * It is recommended to display loading progress if the action tied to the button may take a long time.
         *
         * By default, the button is disabled while the action is in progress. If the parameter leaveActive=true is passed, the button remains enabled.
         */
        showProgress(leaveActive?: boolean): MainButton;

        /** A method to hide the loading indicator.
         */
        hideProgress(): MainButton;

        /** A method to set the button parameters. The params parameter is an object containing one or several fields that need to be changed:
         * - text - button text;
         * - color - button color;
         * - text_color - button text color;
         * - is_active - enable the button;
         * - is_visible - show the button.
         */
        setParams(params: {
            text?: string;
            color?: string;
            text_color?: string;
            is_active?: boolean;
            is_visible?: boolean;
        }): MainButton;
    };

    type SettingsButton = {
        /**
         * Shows whether the context menu item is visible. Set to false by default.
         */
        isVisible: boolean;

        /**
         * A method that sets the press event handler for the Settings item in the context menu.
         * An alias for Telegram.WebApp.onEvent('settingsButtonClicked', callback)
         */
        onClick(
            callback: Function,
        ): SettingsButton;

        /**
         * A method that removes the press event handler from the Settings item in the context menu.
         * An alias for Telegram.WebApp.offEvent('settingsButtonClicked', callback)
         */
        offClick(
            callback: Function,
        ): SettingsButton;

        /**
         * A method to make the Settings item in the context menu visible.
         */
        show(): SettingsButton;

        /**
         * A method to hide the Settings item in the context menu.
         */
        hide(): SettingsButton;
    };

    type HapticFeedback = {
        /** Bot API 6.1+ A method tells that an impact occurred. The Telegram app may play the appropriate haptics based on the style value passed.
         */
        impactOccurred(
            style: "light" | "medium" | "heavy" | "rigid" | "soft"
        ): HapticFeedback;

        /** Bot API 6.1+ A method tells that a task or action has succeeded, failed, or produced a warning. The Telegram app may play the appropriate haptics based on the type value passed.
         */
        notificationOccurred(type: "error" | "success" | "warning"): HapticFeedback;

        /** Bot API 6.1+ A method tells that the user has changed a selection. The Telegram app may play the appropriate haptics.
         *
         * Do not use this feedback when the user makes or confirms a selection; use it only when the selection changes.
         */
        selectionChanged(): HapticFeedback;
    };

    type CloudStorage = {
        /** Bot API 6.9+ A method that stores a value in the cloud storage using the specified key.
         *
         * The key should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed.
         *
         * The value should contain 0-4096 characters. You can store up to 1024 keys in the cloud storage.
         *
         * If an optional callback parameter was passed, the callback function will be called.
         *
         * In case of an error, the first argument will contain the error.
         *
         * In case of success, the first argument will be null and the second argument will be a boolean indicating whether the value was stored.
         */
        setItem(
            key: string,
            value: string,
            callback?: (error: string | null, success: boolean) => void
        ): CloudStorage;

        /** Bot API 6.9+ A method that receives a value from the cloud storage using the specified key.
         *
         * The key should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed.
         *
         * In case of an error, the callback function will be called and the first argument will contain the error.
         *
         * In case of success, the first argument will be null and the value will be passed as the second argument.
         */
        getItem(
            key: string,
            callback: (error: string | null, value: string) => void
        ): CloudStorage;

        /** Bot API 6.9+ A method that receives values from the cloud storage using the specified keys.
         *
         * The keys should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed.
         *
         * In case of an error, the callback function will be called and the first argument will contain the error.
         *
         * In case of success, the first argument will be null and the values will be passed as the second argument.
         */
        getItems(
            keys: string[],
            callback: (error: string | null, values: Record<string, string>) => void
        ): CloudStorage;

        /** Bot API 6.9+ A method that removes a value from the cloud storage using the specified key.
         *
         * The key should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed.
         *
         * If an optional callback parameter was passed, the callback function will be called.
         *
         * In case of an error, the first argument will contain the error.
         *
         * In case of success, the first argument will be null and the second argument will be a boolean indicating whether the value was removed.
         */
        removeItem(
            key: string,
            callback?: (error: string | null, success: boolean) => void
        ): CloudStorage;

        /** Bot API 6.9+ A method that removes values from the cloud storage using the specified keys.
         *
         * The keys should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed.
         *
         * If an optional callback parameter was passed, the callback function will be called.
         *
         * In case of an error, the first argument will contain the error.
         *
         * In case of success, the first argument will be null and the second argument will be a boolean indicating whether the values were removed.
         */
        removeItems(
            keys: string[],
            callback?: (error: string | null, success: boolean) => void
        ): CloudStorage;

        /** Bot API 6.9+ A method that receives the list of all keys stored in the cloud storage.
         *
         * In case of an error, the callback function will be called and the first argument will contain the error.
         *
         * In case of success, the first argument will be null and the list of keys will be passed as the second argument.
         */
        getKeys(
            callback: (error: string | null, keys: string[]) => void
        ): CloudStorage;
    };

    type BiometricManager = {
        /**
         * Bot API 7.2+ Shows whether biometrics object is initialized.
         */
        isInited: boolean;

        /**
         * Bot API 7.2+ Shows whether biometrics is available on the current device.
         */
        isBiometricAvailable: boolean;

        /**
         * Bot API 7.2+ The type of biometrics currently available on the device. Can be one of these values:
         * 		- finger, fingerprint-based biometrics,
         * 		- face, face-based biometrics,
         * 		- unknown, biometrics of an unknown type.
         */
        biometricType: string;

        /**
         * Bot API 7.2+ Shows whether permission to use biometrics has been requested.
         */
        isAccessRequested: boolean;

        /**
         * Bot API 7.2+ Shows whether permission to use biometrics has been granted.
         */
        isAccessGranted: boolean;

        /**
         * Bot API 7.2+ Shows whether the token is saved in secure storage on the device.
         */
        isBiometricTokenSaved: boolean;

        /**
         * Bot API 7.2+ A unique device identifier that can be used to match the token to the device.
         */
        deviceId: string;

        /**
         * Bot API 7.2+ A method that initializes the BiometricManager object.
         * It should be called before the object's first use.
         * If an optional callback parameter was passed, the callback function will be called when the object is initialized.
         */
        init(
            callback?: Function,
        ): void;

        /**
         * A method that requests permission to use biometrics according to the params argument of type BiometricRequestAccessParams.
         * If an optional callback parameter was passed, the callback function will be called and the first argument will be a boolean indicating whether the user granted access.
         */
        requestAccess(
            params: BiometricRequestAccessParams,
            callback?: Function,
        ): void;

        /**
         * A method that authenticates the user using biometrics according to the params argument of type BiometricAuthenticateParams.
         * If an optional callback parameter was passed, the callback function will be called and the first argument will be a boolean indicating whether the user authenticated successfully.
         * If so, the second argument will be a biometric token.
         */
        authenticate(
            params: BiometricAuthenticateParams,
            callback?: Function,
        ): void;

        /**
         * A method that updates the biometric token in secure storage on the device.
         * To remove the token, pass an empty string.
         * If an optional callback parameter was passed, the callback function will be called and the first argument will be a boolean indicating whether the token was updated.
         */
        updateBiometricToken(
            token: string,
            callback?: Function,
        ): void;

        /**
         * A method that opens the biometric access settings for bots.
         * Useful when you need to request biometrics access to users who haven't granted it yet.
         *
         * Note that this method can be called only in response to user interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button)
         */
        openSettings(): void;
    };

    type WebAppInitData = {
        /** Optional. A unique identifier for the Mini App session, required for sending messages via the answerWebAppQuery method.
         */
        query_id?: string;

        /** Optional. An object containing data about the current user.
         */
        user?: WebAppUser;

        /** Optional. An object containing data about the chat partner of the current user in the chat where the bot was launched via the attachment menu.
         *
         * Returned only for private chats and only for Mini Apps launched via the attachment menu.
         */
        receiver?: WebAppUser;

        /** Optional. An object containing data about the chat where the bot was launched via the attachment menu.
         Returned for supergroups, channels, and group 'chats'launched via the  ;attachment menu.
         */
        chat?: WebAppChat;

        /** Optional. Type of the chat from which the Mini App was opened.
         *
         * Can be either "sender" for a private chat with the user opening the link, "private", "group", "supergroup", or "channel".
         *
         * Returned only for Mini Apps launched from direct links.
         */
        chat_type?: "sender" | "private" | "group" | "supergroup" | "channel";

        /** Optional. Global identifier, uniquely corresponding to the chat from which the Mini App was opened.
         *
         * Returned only for Mini Apps launched from a direct link.
         */
        chat_instance?: string;

        /** Optional. The value of the startattach parameter, passed via link.
         *
         * Only returned for Mini Apps when launched from the attachment menu via link.
         */
        start_param?: string;

        /** Optional. Time in seconds, after which a message can be sent via the answerWebAppQuery method.
         */
        can_send_after?: number;

        /** Unix time when the form was opened.
         */
        auth_date?: number;

        /** A hash of all passed parameters, which the bot server can use to check their validity.
         */
        hash: string;
    };

    type WebAppUser = {
        /** A unique identifier for the user or bot.
         */
        id: number;

        /** Optional. True, if this user is a bot. Returns in the receiver field only.
         */
        is_bot?: boolean;

        /** First name of the user or bot.
         */
        first_name: string;

        /** Optional. Last name of the user or bot. */
        last_name?: string;

        /** Optional. Username of the user or bot.
         */
        username?: string;

        /** Optional. IETF language tag of the user's language. Returns in user field only.
         */
        language_code?: string;

        /** Optional. True, if this user is a Telegram Premium user.
         */
        is_premium?: true;

        /**
         * Optional. True, if this user added the bot to the attachment menu
         */
        added_to_attachment_menu?: true;

        /** Optional. True, if this user added the bot to the attachment menu.
         */
        can_join_groups?: true;

        /**
         * Optional. True, if privacy mode is disabled for the bot. Returned only in getMe.
         */
        can_read_all_group_messages?: true;

        /**
         * Optional. True, if the bot supports inline queries. Returned only in getMe.
         */
        supports_inline_queries?: true;

        /** 
         * Optional. True, if the bot can be connected to a Telegram Business account to receive its messages. Returned only in getMe.
         */
        can_connect_to_business?: true;

        /** 
         * Optional. True, if the bot has a main Web App. Returned only in getMe.
         */
        has_main_web_app?: true;
    };

    type WebAppChat = {
        /** Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it.
         *
         * But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
         */
        id: number;

        /** Type of chat, can be either "group", "supergroup", or "channel".
         */
        type: "group" | "supergroup" | "channel";

        /** Title of the chat.
         */
        title: string;

        /** Optional. Username of the chat.
         */
        username?: string;

        /** Optional. URL of the chat’s photo. The photo can be in .jpeg or .svg formats. Only returned for Mini Apps launched from the attachment menu.
         */
        photo_url?: string;
    };

    /** The WebApp object is the main interface for interacting with the Telegram client.
     */
    interface WebApp {
        /** A string with raw data transferred to the Mini App, convenient for validating data.
         *
         * WARNING: Validate data from this field before using it on the bot's server.
         */
        initData: string;

        /** An object with input data transferred to the Mini App.
         *
         * WARNING: Data from this field should not be trusted. You should only use data from initData
         * on the bot's server and only after it has been validated.
         */
        initDataUnsafe: WebAppInitData;

        /** The version of the Bot API available in the user's Telegram app.
         */
        version: string;

        /** The name of the platform of the user's Telegram app.
         */
        platform: string;

        /** The color scheme currently used in the Telegram app. Either "light" or "dark".
         * Also available as the CSS variable var(--tg-color-scheme).
         */
        colorScheme: string;

        /** An object containing the current theme settings used in the Telegram app.
         */
        themeParams: ThemeParams;

        /** True, if the Mini App is expanded to the maximum available height. False, if the Mini App occupies
         * part of the screen and can be expanded to the full height using the expand() method.
         */
        isExpanded: boolean;

        /** The current height of the visible area of the Mini App. Also available in CSS as the variable var(--tg-viewport-height).
         */
        viewportHeight: number;

        /** The height of the visible area of the Mini App in its last stable state. Also available in CSS as a variable var(--tg-viewport-stable-height).
         */
        viewportStableHeight: number;

        /** Current header color in the #RRGGBB format.
         */
        headerColor: string;

        /** Current background color in the #RRGGBB format.
         */
        backgroundColor: string;

        /** True, if the confirmation dialog is enabled while the user is trying to close the Mini App.
         * False, if the confirmation dialog is disabled.
         */
        isClosingConfirmationEnabled: boolean;

        /**
         * True, if vertical swipes to close or minimize the Mini App are enabled.
         * False, if vertical swipes to close or minimize the Mini App are disabled.
         * In any case, the user will still be able to minimize and close the Mini App by swiping the Mini App's header.
        */
        isVerticalSwipesEnabled: boolean;

        /** An object for controlling the back button which can be displayed in the header of the Mini App in the Telegram interface.
         */
        BackButton: BackButton;

        /** An object for controlling the main button, which is displayed at the bottom of the Mini App in the Telegram interface.
         */
        MainButton: MainButton;

        /**
         * This object controls the Settings item in the context menu of the Mini App in the Telegram interface.
         */
        SettingsButton: SettingsButton;

        /** An object for controlling haptic feedback.
         */
        HapticFeedback: HapticFeedback;

        /** An object for controlling cloud storage.
         */
        CloudStorage: CloudStorage;

        /** This object controls biometrics on the device. Before the first use of this object, it needs to be initialized using the init method.
         */
        BiometricManager: BiometricManager;

        /** Function that returns true if the user's app supports a version of the Bot API that is equal to or higher than the version passed as the parameter.
         */
        isVersionAtLeast(version: string): boolean;

        /** Function that sets the app header color in the #RRGGBB format.
         */
        setHeaderColor(color: string): void;

        /** Function that sets the app background color in the #RRGGBB format.
         */
        setBackgroundColor(color: string): void;

        /** Function that enables a confirmation dialog while the user is trying to close the Mini App.
         */
        enableClosingConfirmation(): void;

        /** Function that disables the confirmation dialog while the user is trying to close the Mini App.
         */
        disableClosingConfirmation(): void;

        /** Function that sets the app event handler. Check the list of available events.
         */
        onEvent<K extends keyof WebAppEventType>(eventType: K, eventHandler: Function): void;

        /** Function that deletes a previously set event handler.
         */
        offEvent<K extends keyof WebAppEventType>(eventType: K, eventHandler: Function): void;

        /** Function used to send data to the bot. When this method is called, a service message is sent to the bot
         * containing the data data of the length up to 4096 bytes, and the Mini App is closed. See the field web_app_data
         * in the class Message. This method is only available for Mini Apps launched via a Keyboard button.
         */
        sendData(data: string): void;

        /** Function that inserts the bot's username and the specified inline query in the current chat's input field.
         */
        switchInlineQuery(query: string, choose_chat_types?: string[]): void;

        /** Function that opens a link in an external browser. The Mini App will not be closed.
         * If the optional options parameter is passed with the field try_instant_view=true, the link will be opened in
         * Instant View mode if possible.
         */
        openLink(url: string, options?: { try_instant_view?: boolean }): void;

        /** Function that opens a telegram link inside Telegram app. The Mini App will be closed.
         */
        openTelegramLink(url: string): void;

        /**
         * A method that opens the native story editor with the media specified in the media_url parameter as an HTTPS URL. 
         * An optional params argument of the type StoryShareParams describes additional sharing settings.
         */
        shareToStory(media_url: string, params?: StoryShareParams): void;

        /** Function that opens an invoice using the link url. The Mini App will receive the event invoiceClosed when the invoice is closed.
         */
        openInvoice(url: string, callback?: Function): void;

        /** Function that shows a native popup described by the params argument of the type PopupParams.
         * The Mini App will receive the event popupClosed when the popup is closed.
         */
        showPopup(params: PopupParams, callback?: Function): void;

        /** Function that shows a native popup described by the params argument of the type PopupParams.
         * The Mini App will receive the event popupClosed when the popup is closed.
         */
        showAlert(message: string, callback?: Function): void;

        /** Function that shows message in a simple confirmation window with 'OK' and 'Cancel' buttons.
         *
         * If an optional callback parameter was passed, the callback function will be called when the popup is closed,
         * and the first argument will be a boolean indicating whether the user pressed the 'OK' button.
         */
        showConfirm(message: string, callback?: Function): void;

        /** Function that shows a native popup for scanning a QR code described by the params argument of the type ScanQrPopupParams.
         *
         * The Mini App will receive the event qrTextReceived every time the scanner catches a code with text data.
         *
         * If an optional callback parameter was passed, the callback function will be called and the text from the QR code
         *
         * will be passed as the first argument. Returning true inside this callback function causes the popup to be closed.
         */
        showScanQrPopup(params: ScanQrPopupParams, callback?: Function): void;

        /** Function that closes the native popup for scanning a QR code opened with the showScanQrPopup method.
         * Run it if you received valid data in the event qrTextReceived.
         */
        closeScanQrPopup(): void;

        /** Function that requests text from the clipboard. The Mini App will receive the event clipboardTextReceived.
         *
         * If an optional callback parameter was passed, the callback function will be called, and the text from the clipboard
         * will be passed as the first argument.
         */
        readTextFromClipboard(callback?: Function): void;

        /** Function that shows a native popup requesting permission for the bot to send messages to the user.
         *
         * If an optional callback parameter was passed, the callback function will be called when the popup is closed,
         * and the first argument will be a boolean indicating whether the user granted this access.
         */
        requestWriteAccess(callback?: Function): void;

        /** Function that shows a native popup prompting the user for their phone number.
         *
         * If an optional callback parameter was passed, the callback function will be called when the popup is closed,
         * and the first argument will be a boolean indicating whether the user shared its phone number.
         */
        requestContact(callback?: Function): void;

        /** A method that informs the Telegram app that the Mini App is ready to be displayed.
         */
        ready(): void;

        /** A method that expands the Mini App to the maximum available height. To find out if the Mini App is expanded to
         * the maximum height, refer to the value of the Telegram.WebApp.isExpanded parameter.
         */
        expand(): void;

        /** A method that closes the Mini App.
         */
        close(): void;

        /**
         * A method that enables vertical swipes to close or minimize the Mini App.
         * For user convenience, it is recommended to always enable swipes unless they conflict with the Mini App's own gestures.
         */
        enableVerticalSwipes(): void;

        /**
         * A method that disables vertical swipes to close or minimize the Mini App.
         * This method is useful if your Mini App uses swipe gestures that may conflict with the gestures for minimizing and closing the app.
         */
        disableVerticalSwipes(): void;
    }
}

declare global {
    const Telegram: {
        WebApp: TelegramWebApp.WebApp;
    };
}
