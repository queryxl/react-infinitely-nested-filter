## react-infinitely-nested-filter

This is an example of a filter builder.

The filter can be infinitely nested like:

```
{
  "logic": "AND",
  "filters": [
    {
      "field": "name",
      "operator": "EQ",
      "value": "tom"
    },
    {
      "field": "clientVersion",
      "operator": "EQ",
      "value": "1"
    },
    {
      "logic": "OR",
      "filters": [
        {
          "field": "documentCount",
          "operator": "EQ",
          "value": "2"
        }
        {
          "logic": "AND",
          "filters": [
            {
              "field": "error",
              "operator": "NEQ",
              "value": "falses"
            }
          ]
        }
      ]
    }
  ]
}
```
## Solution 1

Current solution is to generate a `path` `prop` for each component and use Immutable.js to update deep nested data.

Filter component is stateless and any change in input field will dispatch an action and cause a re-render.

### Issue

- generated `path` will case the component to render every time, since it's generated during the *mapping*.
- re-render performance
