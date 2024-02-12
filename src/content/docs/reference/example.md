---
title: Reference
description: Kubecolor Reference
---

## Flags

Available flags for kubecolor. When you pass them, kubecolor will understand them but these flags won't be passed to kubectl.

* `--kubecolor-version`

Prints the version of kubecolor (not kubectl one).

* `--light-background`

When your terminal's background color is something light (e.g white), default color preset might look too bright and not readable.
If so, specify `--light-background` as a command line argument. kubecolor will use a color preset for light-backgrounded environment.

* `--force-colors`

By default, kubecolor never output the result in colors when the tty is not a terminal standard output.
If you want to force kubecolor to show the result in colors for non-terminal tty, you can specify this flag.
For example, when you want to pass kubecolor result to grep (`kubecolor get pods | grep pod_name`), this option is useful.

* `--plain`

When you don't want to colorize output, you can specify `--plain`. Kubecolor understands this option and outputs the result without colorizing.

## ENV Variables

* `KUBECOLOR_OBJ_FRESH`

When setting the variable `KUBECOLOR_OBJ_FRESH` to a duration, you can change the color of the object depending on its creation time.

Please see [Specify object fresh age threshold](#specify-object-fresh-age-threshold)

* `KUBECOLOR_FORCE_COLORS`

In addition to forcing colors with `--force-colors`, you can also do so by setting the environment variable `KUBECOLOR_FORCE_COLORS=true`.
You can use this environment variable to colorize output when you invoke kubecolor in the `watch` command (e.g. `watch kubecolor get pods`).
Set the following alias:

```shell
alias watch='KUBECOLOR_FORCE_COLORS=true watch --color '
```

Be sure to include the space at the end to enable alias expansion (without this additional space, the command `watch kgp` would fail, for example).

* `KUBECOLOR_LIGHT_BACKGROUND`

In addition to use the light color preset with `--light-background`, you can also do so by setting the environment variable `KUBECOLOR_LIGHT_BACKGROUND=true`.