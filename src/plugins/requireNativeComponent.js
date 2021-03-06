/**
 * https://github.com/facebook/react-native/blob/master/Libraries/ReactIOS/requireNativeComponent.js
 */
import React from 'react'; /* eslint no-unused-vars:0 */
import createReactClass from 'create-react-class';

function requireNativeComponent(viewName, componentInterface, extraConfig) {
  return createReactClass({
    displayName: viewName,
    render() {
      return null;
    },
  });
}

module.exports = requireNativeComponent;
