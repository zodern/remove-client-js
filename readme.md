## zodern:remove-client-js

Minifier that removes client js files and replaces them with an empty function.

Some Meteor apps do not use the client architecture, but packages still add client code. Minifying that code can slow down deploys.

To use:
```sh
# Remove existing js minifier
meteor remove standard-minifier-js

# Add this minifier
meteor add zodern:remove-client-js
```
