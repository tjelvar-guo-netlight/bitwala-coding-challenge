# Bitwala Coding Challenge

This coding challenge tasks you with creating an app that displays the latest Bitcoin blocks and transactions!

## Summary

I have built this app using the tech stack as preffered by Bitwala. The app is therefore built with [React Native](https://reactnative.dev/) using [TypeScript](https://www.typescriptlang.org/). Furthermore, [Apollo GraphQL](https://www.apollographql.com/) is used for data fetching and [date-fns](https://date-fns.org/) for some date formatting. The GraphQL API used by the app to fetch Bitcoin data is provided by [Bitquery](https://graphql.bitquery.io/).

In order to get up and running swiftly I chose to build the app using [expo](https://expo.io/) which allows for a smooth development process albeit at some loss of control. However, given the limited scope of this app, expo is more than adequate. Should expo prove to be a limitation in the future one can always choose to "eject" to regain full control.

| Blocks                                       | Block Detail                                             | Transactions                                             |
| -------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| ![Blocks](screenshot1.jpg?raw=true "Blocks") | ![Block Detail](screenshot2.jpg?raw=true "Block Detail") | ![transactions](screenshot3.jpg?raw=true "transactions") |

## Running the App

Since we are using expo we may choose to run the app on a physicall device by downloading the [expo android app](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&gl=US) or its [ios equivalent](https://apps.apple.com/us/app/expo-go/id982107779). We may also run it on a simulator if we so chose.

### Run on physical device

```
npm start
```

This will open up the expo terminal in your browser and you can scan the QR code with the expo app to start. Sometimes there can be an issue starting this way and in that case we can use

```
npm run tunnel
```

Which will run the command `expo start --tunnel`. This will generate another QR code which should work.

### Run on simulators

Start your preffered simulator and run

```
npm run android *OR* npm run ios
```

## Discussion

Below I will briefly dicuss some thoughts about future developments

### Data Provider

If this were to become a "real" app I would probably look at using another data provider or investigate whether Bitquery provides a paid plan with better performance since it seemed very slow at times, especially with fetching transaction data.

### GIT Workflow

As this is just a small demo project made in "one go" it does not showcase any GIT workflow. What i'd use if this was a production project is having at least a `master`, `staging` and `develop` branch. Each of them connected to a separate hosting environment and deployment triggerd via CI/CD pipeline. When it comes to working branches i typically like to categorize them by prefixing either `feature/`, `alignment/` or `hotfix/`. `feature` is used when branching off to add some feature, `alignment` is used if designs have changed after the fact a feature has been implemented and needs adjustments. Finally, `hotfix` or `bugfix` refers to smaller changes or bugfixes. All branches are merged into develop and then develop into staging before anything reaches the master. Furthermore, i like to keep pull requests as bite sized as possible to make the review process easier. For pull requests I like to establish a description template to facilitate structured information with my PRs.

### CI/CD Pipeline

In my CI/CD pipelines i like to typically include a minimum of three steps step which are `linting`, `testing` and `building` The third step can also be building with deployment depending on the branch. All steps in the pipeline must of course pass before any PR can be merged.

### Testing

For testing I do subscribe to the narrative that [React Testing Library](https://testing-library.com/) tells. Which is to always have the user and how they will experience the application in mind when testing rather than testing based off of implementation. Basically, tests are supposed to be able to be written without any knowledge of component implementation.

### Caching

I've use just `InMemoryCache` provided by Apollo for my queries. However, there seems to be some optimizations that can be made as i saw a warning about it. So i'd definitively look into that for future development.

### Error Handling

I only have a tiny bit of error handling which shows a modal if something went wrong with fetching block details. Graceful error handling and good user feedback when an error occurs is very important and is also something i'd add in for future development.
