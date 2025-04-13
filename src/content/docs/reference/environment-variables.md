---
title: Environment variables
description: Variables that are supported by kubecolor
---

## `KUBECOLOR_CONFIG`

Override the path of the config file.

```bash
export KUBECOLOR_CONFIG="$HOME/.kube/color.yaml"        # default
export KUBECOLOR_CONFIG="$HOME/.config/kubecolor.yaml"
```

See: [Reference / Config file](/reference/config/)

## `KUBECOLOR_KUBECTL`

Changes which `kubectl` command to run.

```bash
export KUBECOLOR_KUBECTL=kubectl      # default
export KUBECOLOR_KUBECTL=kubectl1.19
export KUBECOLOR_KUBECTL=oc           # openshift
```

See: [Customizing / Custom kubectl or OpenShift CLI](/customizing/custom-kubectl/)

## `KUBECOLOR_OBJ_FRESH`

When setting the variable `KUBECOLOR_OBJ_FRESH` to a duration, you can change the color of the object depending on its creation time.

```bash
export KUBECOLOR_OBJ_FRESH="0"   # default
export KUBECOLOR_OBJ_FRESH="10h"
```

See: [Customizing / Fresh objects](/customizing/obj-fresh/)

## `KUBECOLOR_FORCE_COLORS`

In addition to forcing colors with `--force-colors`, you can also do so by setting the environment variable `KUBECOLOR_FORCE_COLORS=auto`.
See [Dynamic color support](/usage/how-it-works/#dynamic-color-support) section for all possible values.

You can use this environment variable to colorize output when you invoke kubecolor in the `watch` command (e.g. `watch kubecolor get pods`).
Set the following alias:

```bash
# Add this line to your ~/.bashrc, ~/.zshrc, or similar:
alias watch='KUBECOLOR_FORCE_COLORS=auto watch --color '

# Usage:
watch kubecolor get pods
```

Be sure to include the space at the end to enable alias expansion (without this additional space, the command `watch kgp` would fail, for example).

## `NO_COLOR`

Coloring is disabled if `NO_COLOR` is set to any non-empty value.
This is equivalent to the `--plain` or `--force-colors=none` command-line flags.

```bash
# These disable coloring
export NO_COLOR=1
export NO_COLOR="no"
export NO_COLOR="yes"
export NO_COLOR="Lorem ipsum"

# These revert to kubecolor's default coloring logic
export NO_COLOR=""
unset NO_COLOR
```

## `KUBECOLOR_PRESET`

Changes which color theme kubecolor uses.
Defaults to `dark`

```bash
export KUBECOLOR_PRESET="dark"            # default
export KUBECOLOR_PRESET="light"
export KUBECOLOR_PRESET="protanopia-dark"
```

See: [Customizing / Color themes](/customizing/themes/#switching-to-a-different-color-theme)

## `KUBECOLOR_PAGING`

Whether to pipe supported subcommands to a pager.
Valid values: `auto` or `never`.
Defaults to `never`.

```bash
export KUBECOLOR_PAGING="auto"
export KUBECOLOR_PAGING="never" # default
```

## `KUBECOLOR_PAGER`

Sets which pager application to use.
Defaults to `$PAGER`, `less`, or `more` (depending on which are available)

```bash
export KUBECOLOR_PAGER="less"
```

## `PAGER`

Sets which pager application to use. Used as a default if `KUBECOLOR_PAGER`
environment variable, the `pager` config, or `--pager` flag are unset.

```bash
export PAGER="less"
```

## Theme variables

```bash
# (color) general color for when things are bad
export KUBECOLOR_THEME_BASE_DANGER="red"

# (color) general color for when things are informational
export KUBECOLOR_THEME_BASE_INFO="white"

# (color) general color for when things are less relevant
export KUBECOLOR_THEME_BASE_MUTED="gray:italic"

# (color) general color for when things are focus
export KUBECOLOR_THEME_BASE_PRIMARY="magenta"

# (color) general color for when things are secondary focus
export KUBECOLOR_THEME_BASE_SECONDARY="cyan"

# (color) general color for when things are good
export KUBECOLOR_THEME_BASE_SUCCESS="green"

# (color) general color for when things are wrong
export KUBECOLOR_THEME_BASE_WARNING="yellow"

# (color-list) general color for keys
export KUBECOLOR_THEME_BASE_KEY="$KUBECOLOR_THEME_BASE_SECONDARY"

# (color) default when no specific mapping is found for the command
export KUBECOLOR_THEME_DEFAULT="green"


# (color) used on comments, e.g `# this is a comment`
export KUBECOLOR_THEME_SHELL_COMMENT="$KUBECOLOR_THEME_BASE_MUTED"

# (color) used on commands, e.g `kubectl` or `echo`
export KUBECOLOR_THEME_SHELL_COMMAND="$KUBECOLOR_THEME_BASE_SUCCESS"

# (color) used on arguments, e.g `get pods` in `kubectl get pods`
export KUBECOLOR_THEME_SHELL_ARG="$KUBECOLOR_THEME_BASE_INFO"

# (color) used on flags, e.g `--watch` in `kubectl get pods --watch`
export KUBECOLOR_THEME_SHELL_FLAG="$KUBECOLOR_THEME_BASE_SECONDARY"


# (color-list) used for the key
export KUBECOLOR_THEME_DATA_KEY="$KUBECOLOR_THEME_BASE_KEY"

# (color) used when value is a string
export KUBECOLOR_THEME_DATA_STRING="$KUBECOLOR_THEME_BASE_INFO"

# (color) used when value is true
export KUBECOLOR_THEME_DATA_TRUE="$KUBECOLOR_THEME_BASE_SUCCESS"

# (color) used when value is false
export KUBECOLOR_THEME_DATA_FALSE="$KUBECOLOR_THEME_BASE_DANGER"

# (color) used when the value is a number
export KUBECOLOR_THEME_DATA_NUMBER="$KUBECOLOR_THEME_BASE_PRIMARY"

# (color) used when the value is null, nil, or none
export KUBECOLOR_THEME_DATA_NULL="$KUBECOLOR_THEME_BASE_MUTED"

# (color) used when the value is a quantity, e.g "100m" or "5Gi"
export KUBECOLOR_THEME_DATA_QUANTITY="$KUBECOLOR_THEME_DATA_NUMBER"

# (color) used when the value is a duration, e.g "12m" or "1d12h"
export KUBECOLOR_THEME_DATA_DURATION=""

# (color) color used when the time value is under a certain delay
export KUBECOLOR_THEME_DATA_DURATIONFRESH="$KUBECOLOR_THEME_BASE_SUCCESS"


# (color) used for "0/0"
export KUBECOLOR_THEME_DATA_RATIO_ZERO="$KUBECOLOR_THEME_BASE_MUTED"

# (color) used for "n/n", e.g "1/1"
export KUBECOLOR_THEME_DATA_RATIO_EQUAL=""

# (color) used for "n/m", e.g "0/1"
export KUBECOLOR_THEME_DATA_RATIO_UNEQUAL="$KUBECOLOR_THEME_BASE_WARNING"


# (color) used in status keywords, e.g "Running", "Ready"
export KUBECOLOR_THEME_STATUS_SUCCESS="$KUBECOLOR_THEME_BASE_SUCCESS"

# (color) used in status keywords, e.g "Terminating"
export KUBECOLOR_THEME_STATUS_WARNING="$KUBECOLOR_THEME_BASE_WARNING"

# (color) used in status keywords, e.g "Failed", "Unhealthy"
export KUBECOLOR_THEME_STATUS_ERROR="$KUBECOLOR_THEME_BASE_DANGER"


# (color) used on table headers
export KUBECOLOR_THEME_TABLE_HEADER="$KUBECOLOR_THEME_BASE_INFO"

# (color-list) used on table columns when no other coloring applies such as status or duration coloring. The multiple colors are cycled based on column ID, from left to right.
export KUBECOLOR_THEME_TABLE_COLUMNS="$KUBECOLOR_THEME_BASE_INFO/$KUBECOLOR_THEME_BASE_SECONDARY"


# (color) e.g when text contains "error"
export KUBECOLOR_THEME_STDERR_ERROR="$KUBECOLOR_THEME_BASE_DANGER"

# (color) used on table output like "No resources found"
export KUBECOLOR_THEME_STDERR_NONEFOUND="$KUBECOLOR_THEME_DATA_NULL"

# (color) used on the namespace name of "No resources found in my-ns namespace"
export KUBECOLOR_THEME_STDERR_NONEFOUNDNAMESPACE="$KUBECOLOR_THEME_DATA_STRING"

# (color) *deprecated: this field is no longer used (since v0.4.0)*
export KUBECOLOR_THEME_STDERR_DEFAULT=""


# (color) used on "deployment.apps/foo created"
export KUBECOLOR_THEME_APPLY_CREATED="$KUBECOLOR_THEME_BASE_SUCCESS"

# (color) used on "deployment.apps/bar configured"
export KUBECOLOR_THEME_APPLY_CONFIGURED="$KUBECOLOR_THEME_BASE_WARNING"

# (color) used on "deployment.apps/quux unchanged"
export KUBECOLOR_THEME_APPLY_UNCHANGED="$KUBECOLOR_THEME_BASE_PRIMARY"

# (color) used on "deployment.apps/quux serverside-applied"
export KUBECOLOR_THEME_APPLY_SERVERSIDE="$KUBECOLOR_THEME_BASE_WARNING"

# (color) used on "(dry run)" and "(server dry run)"
export KUBECOLOR_THEME_APPLY_DRYRUN="$KUBECOLOR_THEME_BASE_SECONDARY"

# (color) used when outputs unknown format
export KUBECOLOR_THEME_APPLY_FALLBACK="$KUBECOLOR_THEME_BASE_SUCCESS"


# (color) used on "deployment.apps/foo created"
export KUBECOLOR_THEME_CREATE_CREATED="$KUBECOLOR_THEME_BASE_SUCCESS"

# (color) used on "(dry run)" and "(server dry run)"
export KUBECOLOR_THEME_CREATE_DRYRUN="$KUBECOLOR_THEME_APPLY_DRYRUN"

# (color) used when outputs unknown format
export KUBECOLOR_THEME_CREATE_FALLBACK="$KUBECOLOR_THEME_BASE_SUCCESS"


# (color) used on "deployment.apps "nginx" deleted"
export KUBECOLOR_THEME_DELETE_DELETED="$KUBECOLOR_THEME_BASE_DANGER"

# (color) used on "(dry run)" and "(server dry run)"
export KUBECOLOR_THEME_DELETE_DRYRUN="$KUBECOLOR_THEME_APPLY_DRYRUN"

# (color) used when outputs unknown format
export KUBECOLOR_THEME_DELETE_FALLBACK="$KUBECOLOR_THEME_BASE_DANGER"


# (color-list) used on keys. The multiple colors are cycled based on indentation.
export KUBECOLOR_THEME_DESCRIBE_KEY="$KUBECOLOR_THEME_BASE_KEY"


# (color) used on "node/my-worker-node-01 cordoned"
export KUBECOLOR_THEME_DRAIN_CORDONED="$KUBECOLOR_THEME_BASE_PRIMARY"

# (color) used on "evicting pod my-namespace/my-pod"
export KUBECOLOR_THEME_DRAIN_EVICTINGPOD="$KUBECOLOR_THEME_BASE_MUTED"

# (color) used on "pod/my-pod evicted"
export KUBECOLOR_THEME_DRAIN_EVICTED="$KUBECOLOR_THEME_BASE_WARNING"

# (color) used on "node/my-worker-node-01 drained"
export KUBECOLOR_THEME_DRAIN_DRAINED="$KUBECOLOR_THEME_BASE_SUCCESS"

# (color) used on "(dry run)" and "(server dry run)"
export KUBECOLOR_THEME_DRAIN_DRYRUN="$KUBECOLOR_THEME_APPLY_DRYRUN"

# (color) used when outputs unknown format
export KUBECOLOR_THEME_DRAIN_FALLBACK="$KUBECOLOR_THEME_BASE_WARNING"


# (color-list) used on keys. The multiple colors are cycled based on indentation.
export KUBECOLOR_THEME_EXPLAIN_KEY="$KUBECOLOR_THEME_BASE_KEY"

# (color) used on the trailing "-required-" string
export KUBECOLOR_THEME_EXPLAIN_REQUIRED="$KUBECOLOR_THEME_BASE_DANGER"


# (color) used on "deployment.apps/foo created"
export KUBECOLOR_THEME_EXPOSE_EXPOSED="$KUBECOLOR_THEME_BASE_PRIMARY"

# (color) used on "(dry run)" and "(server dry run)"
export KUBECOLOR_THEME_EXPOSE_DRYRUN="$KUBECOLOR_THEME_APPLY_DRYRUN"

# (color) used when outputs unknown format
export KUBECOLOR_THEME_EXPOSE_FALLBACK="$KUBECOLOR_THEME_BASE_PRIMARY"


# (color) e.g "--kubeconfig"
export KUBECOLOR_THEME_OPTIONS_FLAG="$KUBECOLOR_THEME_BASE_SECONDARY"


# (color) used on "deployment.apps/foo patched"
export KUBECOLOR_THEME_PATCH_PATCHED="$KUBECOLOR_THEME_BASE_WARNING"

# (color) used on "(dry run)" and "(server dry run)"
export KUBECOLOR_THEME_PATCH_DRYRUN="$KUBECOLOR_THEME_APPLY_DRYRUN"

# (color) used when outputs unknown format
export KUBECOLOR_THEME_PATCH_FALLBACK="$KUBECOLOR_THEME_BASE_WARNING"


# (color) used on "deployment.apps/foo rolled back"
export KUBECOLOR_THEME_ROLLOUT_ROLLEDBACK="$KUBECOLOR_THEME_BASE_WARNING"

# (color) used on "deployment.apps/foo paused"
export KUBECOLOR_THEME_ROLLOUT_PAUSED="$KUBECOLOR_THEME_BASE_PRIMARY"

# (color) used on "deployment.apps/foo resumed"
export KUBECOLOR_THEME_ROLLOUT_RESUMED="$KUBECOLOR_THEME_BASE_SECONDARY"

# (color) used on "deployment.apps/foo restarted"
export KUBECOLOR_THEME_ROLLOUT_RESTARTED="$KUBECOLOR_THEME_BASE_WARNING"

# (color) used on "(dry run)" and "(server dry run)"
export KUBECOLOR_THEME_ROLLOUT_DRYRUN="$KUBECOLOR_THEME_APPLY_DRYRUN"

# (color) used when outputs unknown format
export KUBECOLOR_THEME_ROLLOUT_FALLBACK="$KUBECOLOR_THEME_BASE_WARNING"


# (color) used on "deployment.apps/foo scaled"
export KUBECOLOR_THEME_SCALE_SCALED="$KUBECOLOR_THEME_BASE_WARNING"

# (color) used on "(dry run)" and "(server dry run)"
export KUBECOLOR_THEME_SCALE_DRYRUN="$KUBECOLOR_THEME_APPLY_DRYRUN"

# (color) used when outputs unknown format
export KUBECOLOR_THEME_SCALE_FALLBACK="$KUBECOLOR_THEME_BASE_WARNING"


# (color) used on "node/my-worker-node-01 uncordoned"
export KUBECOLOR_THEME_UNCORDON_UNCORDONED="$KUBECOLOR_THEME_BASE_SECONDARY"

# (color) used on "(dry run)" and "(server dry run)"
export KUBECOLOR_THEME_UNCORDON_DRYRUN="$KUBECOLOR_THEME_APPLY_DRYRUN"

# (color) used when outputs unknown format
export KUBECOLOR_THEME_UNCORDON_FALLBACK="$KUBECOLOR_THEME_BASE_WARNING"


# (color-list) used on the key
export KUBECOLOR_THEME_VERSION_KEY="$KUBECOLOR_THEME_BASE_KEY"


# (color) e.g "Examples:" or "Options:"
export KUBECOLOR_THEME_HELP_HEADER="$KUBECOLOR_THEME_TABLE_HEADER"

# (color) e.g "--kubeconfig"
export KUBECOLOR_THEME_HELP_FLAG="$KUBECOLOR_THEME_BASE_SECONDARY"

# (color) Flag descripion under "Options:" heading
export KUBECOLOR_THEME_HELP_FLAGDESC="$KUBECOLOR_THEME_BASE_INFO"

# (color) e.g `[https://example.com]`
export KUBECOLOR_THEME_HELP_URL="$KUBECOLOR_THEME_BASE_SECONDARY"

# (color) Fallback text color
export KUBECOLOR_THEME_HELP_TEXT="$KUBECOLOR_THEME_BASE_INFO"


export KUBECOLOR_THEME_LOGS_KEY="$KUBECOLOR_THEME_DATA_KEY"

# (color) Used on quoted strings that are not part of a `key="value"`
export KUBECOLOR_THEME_LOGS_QUOTEDSTRING="$KUBECOLOR_THEME_DATA_STRING"

export KUBECOLOR_THEME_LOGS_DATE="$KUBECOLOR_THEME_BASE_MUTED"

export KUBECOLOR_THEME_LOGS_SOURCEREF="$KUBECOLOR_THEME_BASE_MUTED"

export KUBECOLOR_THEME_LOGS_GUID="$KUBECOLOR_THEME_BASE_MUTED"


export KUBECOLOR_THEME_LOGS_SEVERITY_TRACE="$KUBECOLOR_THEME_BASE_MUTED"

export KUBECOLOR_THEME_LOGS_SEVERITY_DEBUG="$KUBECOLOR_THEME_BASE_MUTED"

export KUBECOLOR_THEME_LOGS_SEVERITY_INFO="$KUBECOLOR_THEME_BASE_SUCCESS"

export KUBECOLOR_THEME_LOGS_SEVERITY_WARN="$KUBECOLOR_THEME_BASE_WARNING"

export KUBECOLOR_THEME_LOGS_SEVERITY_ERROR="$KUBECOLOR_THEME_BASE_DANGER"

export KUBECOLOR_THEME_LOGS_SEVERITY_FATAL="$KUBECOLOR_THEME_BASE_DANGER"

export KUBECOLOR_THEME_LOGS_SEVERITY_PANIC="$KUBECOLOR_THEME_BASE_DANGER"


# (color) used on added lines
export KUBECOLOR_THEME_DIFF_ADDED="$KUBECOLOR_THEME_BASE_SUCCESS"

# (color) used on removed lines
export KUBECOLOR_THEME_DIFF_REMOVED="$KUBECOLOR_THEME_BASE_DANGER"

# (color) used on unchanged lines
export KUBECOLOR_THEME_DIFF_UNCHANGED="$KUBECOLOR_THEME_BASE_MUTED"
```

## Deprecated flags

:::caution
  Deprecated: these environment variables are kept for backwards compatibility and
  but may be removed in a future version.
:::

### `KUBECTL_COMMAND`

Changes which `kubectl` command to run.

```bash
export KUBECTL_COMMAND=kubectl      # default
export KUBECTL_COMMAND=kubectl1.19
export KUBECTL_COMMAND=oc           # openshift
```

Please use `KUBECOLOR_KUBECTL=kubectl` instead.

### `KUBECOLOR_LIGHT_BACKGROUND`

In addition to use the light color preset with `--light-background`.
Defaults to `false`

```bash
export KUBECOLOR_LIGHT_BACKGROUND=true
```

Please use `KUBECOLOR_PRESET=light` instead.
