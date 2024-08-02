---
title: Command-line flags
description: Kubecolor Reference
---

Available flags for kubecolor.
When you pass them, kubecolor will understand them and filter out these flags
before passing the remaining arguments to kubectl.

As an example, if you run:

```bash
kubecolor get pods --force-colors --namespace=kube-system
```

Then kubecolor will translate that to the following kubectl invokation:

```bash
kubectl get pods --namespace=kube-system
```

## `--kubecolor-version`

Prints the version of kubecolor (not kubectl one).

## `--light-background`

When your terminal's background color is something light (e.g white), default color preset might look too bright and not readable.
If so, specify `--light-background` as a command line argument. kubecolor will use a color preset for light-background environment.

## `--force-colors`

By default, kubecolor never output the result in colors when the tty is not a terminal standard output.
If you want to force kubecolor to show the result in colors for non-terminal tty, you can specify this flag.
For example, when you want to pass kubecolor result to grep (e.g `kubecolor get pods --force-colors | grep pod_name`), this option is useful.
It supports multiple values in the form of `--force-colors=...`.
Just specifying `--force-colors` is the same as `--force-colors=auto`.

See [Dynamic color support](#dynamic-color-support) section for all possible values.

## `--plain`

When you don't want to colorize output, you can specify `--plain`.
Kubecolor understands this option and outputs the result without colorizing.

This is an alias for `--force-colors=none`.

## `--no-paging`

Disable piping the output to a pager.

This is an alias for `--paging=never`.

## `--paging`

Enables piping the (both colored or uncolored) kubecolor command output
through a pager (e.g `less` or `more`).

You can also supply a value, such as `--paging=auto`.
The only option are:

- `--paging=auto`: Performs paging on supported commands (e.g `kubectl get`, but not `kubectl get --watch`)
- `--paging=never`: Disables paging

Just specifying `--paging` is the same as specifying `--paging=auto`.

Defaults to `never`.

## `--pager=cmd`

Configures which pager command to pipe kubecolor's output through (if paging is enabled).

Defaults to:

- `less -RF` if `less` executable is found in `$PATH`,
- `more` if `more` executable is found in `$PATH`,
- if neither, then defaults to empty string.

If no default pager is found, or if pager is reset via `--pager=""`, then paging is effectively disabled.

If pager was found but failed to execute,
or if pager was set to something invalid like `--pager=does-not-exist`,
then kubecolor will log an error message but continue with the execution as normal:

```bash
kubecolor get pods --paging=auto --pager=does-not-exist
# [kubecolor] [ERROR] failed to run pager: exec: "does-not-exist": executable file not found in $PATH
# NAME          READY   STATUS    RESTARTS   AGE
# nginx-dnmv5   1/1     Running   0          6d6h
# nginx-m8pbc   1/1     Running   0          6d6h
# nginx-qdf9b   1/1     Running   0          6d6h
```
