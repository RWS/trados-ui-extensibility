# Trados UI extensibility

Functionality for [Trados](https://www.trados.com/) user interface extensibility.

## Usage

```javascript
import {
  trados,
  ExtensionElement,
  ExtensibilityEventDetail
} from "@trados/trados-ui-extensibility";

// define custom elements
const elements: ExtensionElement[] = [
  {
    elementId: "myCustomButton",
    location: "project-details-toolbar",
    text: "My custom button",
    type: "button",
    actions: [
      {
        eventType: "onclick",
        eventHandler: (detail: ExtensibilityEventDetail) => {
          console.log("My custom button was clicked", detail.project);
        },
        payload: ["project"]
      }
    ]
  }
];

// register extension with Trados
trados.onReady(elements, () => {
  console.log("Trados UI extension registered");
});
```

## Authorization refresh

Public API clients (e.g. `tradosProjectApi()`) always send the latest authorization value received from the host, including clients created before a refresh.

When the user's token is refreshed, the host calls the `register` callback again with the new registration result. The first call completes registration and runs the extension's `onReady` callback; later calls only update the authorization when it changed, otherwise they are ignored.

```javascript
// host page
window.addEventListener("register", event => {
  const { callback } = event.detail;
  const registrationResult = () => ({ key, xLCTenant, publicApiUrl, authorization: `Bearer ${authService.accessToken}` });

  callback(registrationResult());
  authService.onTokenRefreshed(() => callback(registrationResult()));
});
```

## License

The functionality is available with a [MIT license](https://choosealicense.com/licenses/mit/).
