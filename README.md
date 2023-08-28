# Contact Manager - React Native App

Welcome to the **Contact Manager** React Native app! This app allows you to manage your contacts using a user-friendly interface and a set of powerful features. You can easily add, edit, and delete contacts, and the app utilizes various libraries to provide a smooth and engaging user experience.

## Table of Contents

- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [UI Libraries](#ui-libraries)
- [State Management](#state-management)
- [Persistence](#persistence)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the Contact Manager app, follow these steps:

1. Clone the repository: `git clone https://github.com/buckyhelmsmash/ContactManager.git`
2. Navigate to the project directory: `cd ContactManager`
3. Install the project dependencies: `npm install`

## Dependencies

The Contact Manager app relies on the following key dependencies:

- **@react-navigation/native** and **@react-navigation/native-stack**: Used for navigation within the app.
- **@react-native-material/core**: Provides UI components for a polished and consistent look.
- **react-native-swipe-list-view**: Enables swipeable lists for a seamless user experience.
- **@reduxjs/toolkit** and **react-redux**: Implement state management using Redux.
- **redux-persist** and **@react-native-async-storage/async-storage**: Manage and persist state using AsyncStorage.

For a complete list of dependencies, refer to the [package.json](https://github.com/buckyhelmsmash/ContactManager/blob/main/package.json) file.

## Usage

To run the app on an Android emulator or device, use the following command:

```sh
npm run android
```

This command will start the development server and launch the app on the connected Android device.

## UI Libraries

The Contact Manager app utilizes the `@react-native-material/core` library for its UI components. This library provides a consistent and attractive design to enhance the user experience.

## State Management

State management in the Contact Manager app is implemented using **Redux** along with the **@reduxjs/toolkit** and **react-redux** packages. Redux enables centralized state management, making it easier to manage and share data across different components.

## Persistence

The app uses **redux-persist** in combination with **@react-native-async-storage/async-storage** to persist the Redux store data in the device's local storage. This ensures that user data and preferences are preserved even if the app is closed or restarted.

## Contributing

Contributions to the Contact Manager app are welcome! If you find any issues or have suggestions for improvements, please feel free to open issues or submit pull requests in the [GitHub repository](https://github.com/buckyhelmsmash/ContactManager).

---

Feel free to explore, modify, and enhance the Contact Manager app. Happy coding! 🚀
