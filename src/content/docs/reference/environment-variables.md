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

| Environment variable                        | Type    | Description                                                                                                                                                                                                                                         | Dark theme
| --------------------                        | ----    | -----------                                                                                                                                                                                                                                         | ----------
| `KUBECOLOR_THEME_BASE_DANGER`               | color   | general color for when things are bad                                                                                                                                                                                                               | `red`
| `KUBECOLOR_THEME_BASE_INFO`                 | color   | general color for when things are informational                                                                                                                                                                                                     | `white`
| `KUBECOLOR_THEME_BASE_MUTED`                | color   | general color for when things are less relevant                                                                                                                                                                                                     | `gray:italic`
| `KUBECOLOR_THEME_BASE_PRIMARY`              | color   | general color for when things are focus                                                                                                                                                                                                             | `magenta`
| `KUBECOLOR_THEME_BASE_SECONDARY`            | color   | general color for when things are secondary focus                                                                                                                                                                                                   | `cyan`
| `KUBECOLOR_THEME_BASE_SUCCESS`              | color   | general color for when things are good                                                                                                                                                                                                              | `green`
| `KUBECOLOR_THEME_BASE_WARNING`              | color   | general color for when things are wrong                                                                                                                                                                                                             | `yellow`
| `KUBECOLOR_THEME_BASE_KEY`                  | color[] | general color for keys<br/>*(fallback to `[KUBECOLOR_THEME_BASE_SECONDARY]`)*                                                                                                                                                                       | `hicyan / cyan`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_DEFAULT`                   | color   | default when no specific mapping is found for the command                                                                                                                                                                                           | `green`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_SHELL_COMMENT`             | color   | used on comments, e.g `# this is a comment`<br/>*(fallback to `KUBECOLOR_THEME_BASE_MUTED`)*                                                                                                                                                        | `gray:italic`
| `KUBECOLOR_THEME_SHELL_COMMAND`             | color   | used on commands, e.g `kubectl` or `echo`<br/>*(fallback to `KUBECOLOR_THEME_BASE_SUCCESS`)*                                                                                                                                                        | `green`
| `KUBECOLOR_THEME_SHELL_ARG`                 | color   | used on arguments, e.g `get pods` in `kubectl get pods`<br/>*(fallback to `KUBECOLOR_THEME_BASE_INFO`)*                                                                                                                                             | `white`
| `KUBECOLOR_THEME_SHELL_FLAG`                | color   | used on flags, e.g `--watch` in `kubectl get pods --watch`<br/>*(fallback to `KUBECOLOR_THEME_BASE_SECONDARY`)*                                                                                                                                     | `cyan`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_DATA_KEY`                  | color[] | used for the key<br/>*(fallback to `KUBECOLOR_THEME_BASE_KEY`)*                                                                                                                                                                                     | `hicyan / cyan`
| `KUBECOLOR_THEME_DATA_STRING`               | color   | used when value is a string<br/>*(fallback to `KUBECOLOR_THEME_BASE_INFO`)*                                                                                                                                                                         | `hiyellow`
| `KUBECOLOR_THEME_DATA_TRUE`                 | color   | used when value is true<br/>*(fallback to `KUBECOLOR_THEME_BASE_SUCCESS`)*                                                                                                                                                                          | `green`
| `KUBECOLOR_THEME_DATA_FALSE`                | color   | used when value is false<br/>*(fallback to `KUBECOLOR_THEME_BASE_DANGER`)*                                                                                                                                                                          | `red`
| `KUBECOLOR_THEME_DATA_NUMBER`               | color   | used when the value is a number<br/>*(fallback to `KUBECOLOR_THEME_BASE_PRIMARY`)*                                                                                                                                                                  | `magenta`
| `KUBECOLOR_THEME_DATA_NULL`                 | color   | used when the value is null, nil, or none<br/>*(fallback to `KUBECOLOR_THEME_BASE_MUTED`)*                                                                                                                                                          | `gray:italic`
| `KUBECOLOR_THEME_DATA_QUANTITY`             | color   | used when the value is a quantity, e.g "100m" or "5Gi"<br/>*(fallback to `KUBECOLOR_THEME_DATA_NUMBER`)*                                                                                                                                            | `magenta`
| `KUBECOLOR_THEME_DATA_DURATION`             | color   | used when the value is a duration, e.g "12m" or "1d12h"                                                                                                                                                                                             |
| `KUBECOLOR_THEME_DATA_DURATIONFRESH`        | color   | color used when the time value is under a certain delay<br/>*(fallback to `KUBECOLOR_THEME_BASE_SUCCESS`)*                                                                                                                                          | `green`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_DATA_RATIO_ZERO`           | color   | used for "0/0"<br/>*(fallback to `KUBECOLOR_THEME_BASE_MUTED`)*                                                                                                                                                                                     | `gray:italic`
| `KUBECOLOR_THEME_DATA_RATIO_EQUAL`          | color   | used for "n/n", e.g "1/1"                                                                                                                                                                                                                           |
| `KUBECOLOR_THEME_DATA_RATIO_UNEQUAL`        | color   | used for "n/m", e.g "0/1"<br/>*(fallback to `KUBECOLOR_THEME_BASE_WARNING`)*                                                                                                                                                                        | `yellow`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_STATUS_SUCCESS`            | color   | used in status keywords, e.g "Running", "Ready"<br/>*(fallback to `KUBECOLOR_THEME_BASE_SUCCESS`)*                                                                                                                                                  | `green`
| `KUBECOLOR_THEME_STATUS_WARNING`            | color   | used in status keywords, e.g "Terminating"<br/>*(fallback to `KUBECOLOR_THEME_BASE_WARNING`)*                                                                                                                                                       | `yellow`
| `KUBECOLOR_THEME_STATUS_ERROR`              | color   | used in status keywords, e.g "Failed", "Unhealthy"<br/>*(fallback to `KUBECOLOR_THEME_BASE_DANGER`)*                                                                                                                                                | `red`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_TABLE_HEADER`              | color   | used on table headers<br/>*(fallback to `KUBECOLOR_THEME_BASE_INFO`)*                                                                                                                                                                               | `bold`
| `KUBECOLOR_THEME_TABLE_COLUMNS`             | color[] | used on table columns when no other coloring applies such as status or duration coloring. The multiple colors are cycled based on column ID, from left to right.<br/>*(fallback to `[KUBECOLOR_THEME_BASE_INFO / KUBECOLOR_THEME_BASE_SECONDARY]`)* | `white / cyan`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_STDERR_ERROR`              | color   | e.g when text contains "error"<br/>*(fallback to `KUBECOLOR_THEME_BASE_DANGER`)*                                                                                                                                                                    | `red`
| `KUBECOLOR_THEME_STDERR_NONEFOUND`          | color   | used on table output like "No resources found"<br/>*(fallback to `KUBECOLOR_THEME_DATA_NULL`)*                                                                                                                                                      | `gray:italic`
| `KUBECOLOR_THEME_STDERR_NONEFOUNDNAMESPACE` | color   | used on the namespace name of "No resources found in my-ns namespace"<br/>*(fallback to `KUBECOLOR_THEME_DATA_STRING`)*                                                                                                                             | `hiyellow`
| `KUBECOLOR_THEME_STDERR_DEFAULT`            | color   | *deprecated: this field is no longer used (since v0.4.0)*                                                                                                                                                                                           |
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_APPLY_CREATED`             | color   | used on "deployment.apps/foo created"<br/>*(fallback to `KUBECOLOR_THEME_BASE_SUCCESS`)*                                                                                                                                                            | `green`
| `KUBECOLOR_THEME_APPLY_CONFIGURED`          | color   | used on "deployment.apps/bar configured"<br/>*(fallback to `KUBECOLOR_THEME_BASE_WARNING`)*                                                                                                                                                         | `yellow`
| `KUBECOLOR_THEME_APPLY_UNCHANGED`           | color   | used on "deployment.apps/quux unchanged"<br/>*(fallback to `KUBECOLOR_THEME_BASE_PRIMARY`)*                                                                                                                                                         | `magenta`
| `KUBECOLOR_THEME_APPLY_SERVERSIDE`          | color   | used on "deployment.apps/quux serverside-applied"<br/>*(fallback to `KUBECOLOR_THEME_BASE_WARNING`)*                                                                                                                                                | `yellow`
| `KUBECOLOR_THEME_APPLY_DRYRUN`              | color   | used on "(dry run)" and "(server dry run)"<br/>*(fallback to `KUBECOLOR_THEME_BASE_SECONDARY`)*                                                                                                                                                     | `cyan`
| `KUBECOLOR_THEME_APPLY_FALLBACK`            | color   | used when outputs unknown format<br/>*(fallback to `KUBECOLOR_THEME_BASE_SUCCESS`)*                                                                                                                                                                 | `green`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_CREATE_CREATED`            | color   | used on "deployment.apps/foo created"<br/>*(fallback to `KUBECOLOR_THEME_BASE_SUCCESS`)*                                                                                                                                                            | `green`
| `KUBECOLOR_THEME_CREATE_DRYRUN`             | color   | used on "(dry run)" and "(server dry run)"<br/>*(fallback to `KUBECOLOR_THEME_APPLY_DRYRUN`)*                                                                                                                                                       | `cyan`
| `KUBECOLOR_THEME_CREATE_FALLBACK`           | color   | used when outputs unknown format<br/>*(fallback to `KUBECOLOR_THEME_BASE_SUCCESS`)*                                                                                                                                                                 | `green`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_DELETE_DELETED`            | color   | used on "deployment.apps "nginx" deleted"<br/>*(fallback to `KUBECOLOR_THEME_BASE_DANGER`)*                                                                                                                                                         | `red`
| `KUBECOLOR_THEME_DELETE_DRYRUN`             | color   | used on "(dry run)" and "(server dry run)"<br/>*(fallback to `KUBECOLOR_THEME_APPLY_DRYRUN`)*                                                                                                                                                       | `cyan`
| `KUBECOLOR_THEME_DELETE_FALLBACK`           | color   | used when outputs unknown format<br/>*(fallback to `KUBECOLOR_THEME_BASE_DANGER`)*                                                                                                                                                                  | `red`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_DESCRIBE_KEY`              | color[] | used on keys. The multiple colors are cycled based on indentation.<br/>*(fallback to `KUBECOLOR_THEME_BASE_KEY`)*                                                                                                                                   | `hicyan / cyan`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_DRAIN_CORDONED`            | color   | used on "node/my-worker-node-01 cordoned"<br/>*(fallback to `KUBECOLOR_THEME_BASE_PRIMARY`)*                                                                                                                                                        | `magenta`
| `KUBECOLOR_THEME_DRAIN_EVICTINGPOD`         | color   | used on "evicting pod my-namespace/my-pod"<br/>*(fallback to `KUBECOLOR_THEME_BASE_MUTED`)*                                                                                                                                                         | `gray:italic`
| `KUBECOLOR_THEME_DRAIN_EVICTED`             | color   | used on "pod/my-pod evicted"<br/>*(fallback to `KUBECOLOR_THEME_BASE_WARNING`)*                                                                                                                                                                     | `yellow`
| `KUBECOLOR_THEME_DRAIN_DRAINED`             | color   | used on "node/my-worker-node-01 drained"<br/>*(fallback to `KUBECOLOR_THEME_BASE_SUCCESS`)*                                                                                                                                                         | `green`
| `KUBECOLOR_THEME_DRAIN_DRYRUN`              | color   | used on "(dry run)" and "(server dry run)"<br/>*(fallback to `KUBECOLOR_THEME_APPLY_DRYRUN`)*                                                                                                                                                       | `cyan`
| `KUBECOLOR_THEME_DRAIN_FALLBACK`            | color   | used when outputs unknown format<br/>*(fallback to `KUBECOLOR_THEME_BASE_WARNING`)*                                                                                                                                                                 | `yellow`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_EXPLAIN_KEY`               | color[] | used on keys. The multiple colors are cycled based on indentation.<br/>*(fallback to `KUBECOLOR_THEME_BASE_KEY`)*                                                                                                                                   | `hicyan / cyan`
| `KUBECOLOR_THEME_EXPLAIN_REQUIRED`          | color   | used on the trailing "-required-" string<br/>*(fallback to `KUBECOLOR_THEME_BASE_DANGER`)*                                                                                                                                                          | `red`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_EXPOSE_EXPOSED`            | color   | used on "deployment.apps/foo created"<br/>*(fallback to `KUBECOLOR_THEME_BASE_PRIMARY`)*                                                                                                                                                            | `magenta`
| `KUBECOLOR_THEME_EXPOSE_DRYRUN`             | color   | used on "(dry run)" and "(server dry run)"<br/>*(fallback to `KUBECOLOR_THEME_APPLY_DRYRUN`)*                                                                                                                                                       | `cyan`
| `KUBECOLOR_THEME_EXPOSE_FALLBACK`           | color   | used when outputs unknown format<br/>*(fallback to `KUBECOLOR_THEME_BASE_PRIMARY`)*                                                                                                                                                                 | `magenta`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_OPTIONS_FLAG`              | color   | e.g "--kubeconfig"<br/>*(fallback to `KUBECOLOR_THEME_BASE_SECONDARY`)*                                                                                                                                                                             | `cyan`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_PATCH_PATCHED`             | color   | used on "deployment.apps/foo patched"<br/>*(fallback to `KUBECOLOR_THEME_BASE_WARNING`)*                                                                                                                                                            | `yellow`
| `KUBECOLOR_THEME_PATCH_DRYRUN`              | color   | used on "(dry run)" and "(server dry run)"<br/>*(fallback to `KUBECOLOR_THEME_APPLY_DRYRUN`)*                                                                                                                                                       | `cyan`
| `KUBECOLOR_THEME_PATCH_FALLBACK`            | color   | used when outputs unknown format<br/>*(fallback to `KUBECOLOR_THEME_BASE_WARNING`)*                                                                                                                                                                 | `yellow`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_ROLLOUT_ROLLEDBACK`        | color   | used on "deployment.apps/foo rolled back"<br/>*(fallback to `KUBECOLOR_THEME_BASE_WARNING`)*                                                                                                                                                        | `yellow`
| `KUBECOLOR_THEME_ROLLOUT_PAUSED`            | color   | used on "deployment.apps/foo paused"<br/>*(fallback to `KUBECOLOR_THEME_BASE_PRIMARY`)*                                                                                                                                                             | `magenta`
| `KUBECOLOR_THEME_ROLLOUT_RESUMED`           | color   | used on "deployment.apps/foo resumed"<br/>*(fallback to `KUBECOLOR_THEME_BASE_SECONDARY`)*                                                                                                                                                          | `cyan`
| `KUBECOLOR_THEME_ROLLOUT_RESTARTED`         | color   | used on "deployment.apps/foo restarted"<br/>*(fallback to `KUBECOLOR_THEME_BASE_WARNING`)*                                                                                                                                                          | `yellow`
| `KUBECOLOR_THEME_ROLLOUT_DRYRUN`            | color   | used on "(dry run)" and "(server dry run)"<br/>*(fallback to `KUBECOLOR_THEME_APPLY_DRYRUN`)*                                                                                                                                                       | `cyan`
| `KUBECOLOR_THEME_ROLLOUT_FALLBACK`          | color   | used when outputs unknown format<br/>*(fallback to `KUBECOLOR_THEME_BASE_WARNING`)*                                                                                                                                                                 | `yellow`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_SCALE_SCALED`              | color   | used on "deployment.apps/foo scaled"<br/>*(fallback to `KUBECOLOR_THEME_BASE_WARNING`)*                                                                                                                                                             | `yellow`
| `KUBECOLOR_THEME_SCALE_DRYRUN`              | color   | used on "(dry run)" and "(server dry run)"<br/>*(fallback to `KUBECOLOR_THEME_APPLY_DRYRUN`)*                                                                                                                                                       | `cyan`
| `KUBECOLOR_THEME_SCALE_FALLBACK`            | color   | used when outputs unknown format<br/>*(fallback to `KUBECOLOR_THEME_BASE_WARNING`)*                                                                                                                                                                 | `yellow`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_UNCORDON_UNCORDONED`       | color   | used on "node/my-worker-node-01 uncordoned"<br/>*(fallback to `KUBECOLOR_THEME_BASE_SECONDARY`)*                                                                                                                                                    | `cyan`
| `KUBECOLOR_THEME_UNCORDON_DRYRUN`           | color   | used on "(dry run)" and "(server dry run)"<br/>*(fallback to `KUBECOLOR_THEME_APPLY_DRYRUN`)*                                                                                                                                                       | `cyan`
| `KUBECOLOR_THEME_UNCORDON_FALLBACK`         | color   | used when outputs unknown format<br/>*(fallback to `KUBECOLOR_THEME_BASE_WARNING`)*                                                                                                                                                                 | `yellow`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_VERSION_KEY`               | color[] | used on the key<br/>*(fallback to `KUBECOLOR_THEME_BASE_KEY`)*                                                                                                                                                                                      | `hicyan / cyan`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_HELP_HEADER`               | color   | e.g "Examples:" or "Options:"<br/>*(fallback to `KUBECOLOR_THEME_TABLE_HEADER`)*                                                                                                                                                                    | `bold`
| `KUBECOLOR_THEME_HELP_FLAG`                 | color   | e.g "--kubeconfig"<br/>*(fallback to `KUBECOLOR_THEME_BASE_SECONDARY`)*                                                                                                                                                                             | `cyan`
| `KUBECOLOR_THEME_HELP_FLAGDESC`             | color   | Flag descripion under "Options:" heading<br/>*(fallback to `KUBECOLOR_THEME_BASE_INFO`)*                                                                                                                                                            | `white`
| `KUBECOLOR_THEME_HELP_URL`                  | color   | e.g `[https://example.com]`<br/>*(fallback to `KUBECOLOR_THEME_BASE_SECONDARY`)*                                                                                                                                                                    | `cyan`
| `KUBECOLOR_THEME_HELP_TEXT`                 | color   | Fallback text color<br/>*(fallback to `KUBECOLOR_THEME_BASE_INFO`)*                                                                                                                                                                                 | `white`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_LOGS_KEY`                  | color[] | *(fallback to `KUBECOLOR_THEME_DATA_KEY`)*                                                                                                                                                                                                          | `hicyan / cyan`
| `KUBECOLOR_THEME_LOGS_QUOTEDSTRING`         | color   | Used on quoted strings that are not part of a `key="value"`<br/>*(fallback to `KUBECOLOR_THEME_DATA_STRING`)*                                                                                                                                       | `hiyellow`
| `KUBECOLOR_THEME_LOGS_DATE`                 | color   | *(fallback to `KUBECOLOR_THEME_BASE_MUTED`)*                                                                                                                                                                                                        | `gray:italic`
| `KUBECOLOR_THEME_LOGS_SOURCEREF`            | color   | *(fallback to `KUBECOLOR_THEME_BASE_MUTED`)*                                                                                                                                                                                                        | `gray:italic`
| `KUBECOLOR_THEME_LOGS_GUID`                 | color   | *(fallback to `KUBECOLOR_THEME_BASE_MUTED`)*                                                                                                                                                                                                        | `gray:italic`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_LOGS_SEVERITY_TRACE`       | color   | *(fallback to `KUBECOLOR_THEME_BASE_MUTED`)*                                                                                                                                                                                                        | `gray:italic`
| `KUBECOLOR_THEME_LOGS_SEVERITY_DEBUG`       | color   | *(fallback to `KUBECOLOR_THEME_BASE_MUTED`)*                                                                                                                                                                                                        | `gray:italic`
| `KUBECOLOR_THEME_LOGS_SEVERITY_INFO`        | color   | *(fallback to `KUBECOLOR_THEME_BASE_SUCCESS`)*                                                                                                                                                                                                      | `green`
| `KUBECOLOR_THEME_LOGS_SEVERITY_WARN`        | color   | *(fallback to `KUBECOLOR_THEME_BASE_WARNING`)*                                                                                                                                                                                                      | `yellow`
| `KUBECOLOR_THEME_LOGS_SEVERITY_ERROR`       | color   | *(fallback to `KUBECOLOR_THEME_BASE_DANGER`)*                                                                                                                                                                                                       | `red`
| `KUBECOLOR_THEME_LOGS_SEVERITY_FATAL`       | color   | *(fallback to `KUBECOLOR_THEME_BASE_DANGER`)*                                                                                                                                                                                                       | `red`
| `KUBECOLOR_THEME_LOGS_SEVERITY_PANIC`       | color   | *(fallback to `KUBECOLOR_THEME_BASE_DANGER`)*                                                                                                                                                                                                       | `red`
|                                             |         |                                                                                                                                                                                                                                                     |
| `KUBECOLOR_THEME_DIFF_ADDED`                | color   | used on added lines<br/>*(fallback to `KUBECOLOR_THEME_BASE_SUCCESS`)*                                                                                                                                                                              | `green`
| `KUBECOLOR_THEME_DIFF_REMOVED`              | color   | used on removed lines<br/>*(fallback to `KUBECOLOR_THEME_BASE_DANGER`)*                                                                                                                                                                             | `red`
| `KUBECOLOR_THEME_DIFF_UNCHANGED`            | color   | used on unchanged lines<br/>*(fallback to `KUBECOLOR_THEME_BASE_MUTED`)*                                                                                                                                                                            | `gray:italic`

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
