# Gatsby develop issue when debugging

To reproduce the problem:

```
yarn add gatsby@2.22.0
```

Then, from VS CODE, press `F5`. An exceptions occurs.

Adding next version:

```
yarn add gatsby@2.22.0
```

simply makes the debugger not to hit any breakpoints in `gatsby-node`.

To verify that this used to work in previous versions (latest `debuggable` known version):

```
yarn add gatsby@2.21.40
```

Then press `F5` again.

You should observe that the breakpoint is hit.
