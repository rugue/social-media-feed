# Social Media Feed App

A React Native Expo TypeScript application that demonstrates a social media feed with infinite scrolling.

## Features

- Display a feed of social media posts
- Infinite scrolling to load more posts
- Efficient rendering using FlatList
- Error handling and loading states
- TypeScript for improved type safety

## ScreenShot

<img src="https://github.com/rugue/weather-app-ani/blob/master/Screenshot_1724254966.png?raw=true" alt="WeatherCard Screenshot" width="250"/>

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/rugue/social-media-feed-app.git
   cd social-media-feed-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the App

To start the development server:

```
npx expo start
```

This will open the Expo DevTools in your browser. You can run the app on an iOS or Android simulator, or scan the QR code with the Expo Go app on your physical device.

## Project Structure

```
project-root/
├── app/
│   ├── index.tsx         # Main feed screen
│   └── _layout.tsx       # App layout
├── components/
│   ├── Post.tsx          # Individual post component
│   └── ErrorMessage.tsx  # Error message component
├── hooks/
│   ├── usePosts.ts       # Custom hook for managing posts
│   └── useInfiniteScroll.ts  # Custom hook for infinite scroll
├── services/
│   └── api.ts            # API service
├── types/
│   └── index.ts          # TypeScript type definitions
├── utils/
│   └── debounce.ts       # Utility function for debouncing
├── package.json
└── tsconfig.json
```

## Contributing

Contributions to the Social Media Feed App are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

If you have any questions or feedback, please open an issue on the GitHub repository.

Thank you for using or contributing to the Social Media Feed App!
