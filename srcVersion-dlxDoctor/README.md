node: 15.7.0
npm: 7.5.0
yarn (in shell): 1.22.10
yarn (in product): 2.4.0-git.20210130.hash-b5b9abf4
lerna: 3.22.1


1. `PNP_DEBUG_LEVEL=1`
2. `yarn set version from sources --no-minify`
3. `yarn plugin import from sources exec`
4. `yarn plugin import from sources typescript`
5. `yarn plugin import from sources interactive-tools`
6. `yarn plugin import from sources workspace-tools`
7. `yarn workspaces focus --all`
8. `yarn dlx @yarnpkg/doctor`
9.  so, get STDERR >>>
  ```
  ➤ YN0000: ┌ Resolution step
  ➤ YN0000: └ Completed in 4s 719ms
  ➤ YN0000: ┌ Fetch step
  ➤ YN0013: │ treeify@npm:1.1.0 can't be found in the cache and will be fetched from the remote registry
  ➤ YN0013: │ tunnel@npm:0.0.6 can't be found in the cache and will be fetched from the remote registry
  ➤ YN0013: │ typescript@npm:4.1.0-beta can't be found in the cache and will be fetched from the remote registry
  ➤ YN0013: │ typescript@patch:typescript@npm%3A4.1.0-beta#builtin<compat/typescript>::version=4.1.0-beta&hash=cc6730 can
  ➤ YN0013: │ yup@npm:0.27.0 can't be found in the cache and will be fetched from the remote registry
  ➤ YN0000: └ Completed in 39s 229ms
  ➤ YN0000: ┌ Link step
  ➤ YN0000: └ Completed in 4s 415ms
  ➤ YN0000: Done in 48s 439ms

  ➤ YN0000: Found 2 package(s) to process
  ➤ YN0000: For a grand total of 95 file(s) to validate

  ➤ YN0000: ┌ /home/user/0/test_yarn/package.json
  ➤ YN0001: │ UsageError: This plugin cannot access the package referenced via typanion which is neither a builtin, nor an exposed entry (when initializing @yarnpkg/plugin-workspace-tools, defined in /home/user/0/test_yarn/.yarnrc.yml)
      at pluginRequire (/tmp/xfs-07a68435/dlx-9401/node_modules/@yarnpkg/core/lib/Configuration.js:753:31)
      at Object.138 (/home/user/0/test_yarn/.yarn/plugins/@yarnpkg/plugin-workspace-tools.cjs:4:2563)
      at n (/home/user/0/test_yarn/.yarn/plugins/@yarnpkg/plugin-workspace-tools.cjs:25:2853)
      at /home/user/0/test_yarn/.yarn/plugins/@yarnpkg/plugin-workspace-tools.cjs:25:3280
      at factory (/home/user/0/test_yarn/.yarn/plugins/@yarnpkg/plugin-workspace-tools.cjs:25:3288)
      at /tmp/xfs-07a68435/dlx-9401/node_modules/@yarnpkg/core/lib/Configuration.js:757:39
      at Object.prettifySyncErrors (/tmp/xfs-07a68435/dlx-9401/node_modules/@yarnpkg/core/lib/miscUtils.js:129:16)
      at importPlugin (/tmp/xfs-07a68435/dlx-9401/node_modules/@yarnpkg/core/lib/Configuration.js:756:42)
      at Function.find (/tmp/xfs-07a68435/dlx-9401/node_modules/@yarnpkg/core/lib/Configuration.js:781:21)
      at async findLockfileWorkspace (/tmp/xfs-07a68435/dlx-9401/node_modules/@yarnpkg/doctor/lib/cli.js:266:35)
  ➤ YN0000: └ Completed in 0s 563ms

  ➤ YN0000: ┌ /home/user/0/test_yarn/tools/fe-scripts/package.json
  ➤ YN0001: │ UsageError: This plugin cannot access the package referenced via typanion which is neither a builtin, nor an exposed entry (when initializing @yarnpkg/plugin-workspace-tools, defined in /home/user/0/test_yarn/.yarnrc.yml)
      at pluginRequire (/tmp/xfs-07a68435/dlx-9401/node_modules/@yarnpkg/core/lib/Configuration.js:753:31)
      at Object.138 (/home/user/0/test_yarn/.yarn/plugins/@yarnpkg/plugin-workspace-tools.cjs:4:2563)
      at n (/home/user/0/test_yarn/.yarn/plugins/@yarnpkg/plugin-workspace-tools.cjs:25:2853)
      at /home/user/0/test_yarn/.yarn/plugins/@yarnpkg/plugin-workspace-tools.cjs:25:3280
      at factory (/home/user/0/test_yarn/.yarn/plugins/@yarnpkg/plugin-workspace-tools.cjs:25:3288)
      at /tmp/xfs-07a68435/dlx-9401/node_modules/@yarnpkg/core/lib/Configuration.js:757:39
      at Object.prettifySyncErrors (/tmp/xfs-07a68435/dlx-9401/node_modules/@yarnpkg/core/lib/miscUtils.js:129:16)
      at importPlugin (/tmp/xfs-07a68435/dlx-9401/node_modules/@yarnpkg/core/lib/Configuration.js:756:42)
      at Function.find (/tmp/xfs-07a68435/dlx-9401/node_modules/@yarnpkg/core/lib/Configuration.js:781:21)
      at async findLockfileWorkspace (/tmp/xfs-07a68435/dlx-9401/node_modules/@yarnpkg/doctor/lib/cli.js:266:35)
  ➤ YN0000: └ Completed

  ➤ YN0000: Failed with errors in 0s 624ms
  ```

10. error in console on each `yarn plugi import from source ...`:
    ```ts
    TypeError: Cannot read property 'length' of undefined
    TypeError: Cannot read property 'length' of undefined
    at computeLineStarts (d:\temp\yarnpkg-sources\d0a670\.yarn\cache\typescript-patch-3fdb043cfb-8f8f9508d0.zip\node_modules\typescript\lib\typescript.js:9328:27)
    at Object.getLineStarts (d:\temp\yarnpkg-sources\d0a670\.yarn\cache\typescript-patch-3fdb043cfb-8f8f9508d0.zip\node_modules\typescript\lib\typescript.js:9388:60)
    at getCurrentLineMap (d:\temp\yarnpkg-sources\d0a670\.yarn\cache\typescript-patch-3fdb043cfb-8f8f9508d0.zip\node_modules\typescript\lib\typescript.js:99609:59)
    at emitDetachedCommentsAndUpdateCommentsInfo (d:\temp\yarnpkg-sources\d0a670\.yarn\cache\typescript-patch-3fdb043cfb-8f8f9508d0.zip\node_modules\typescript\lib\typescript.js:103275:94)
    at emitBodyWithDetachedComments (d:\temp\yarnpkg-sources\d0a670\.yarn\cache\typescript-patch-3fdb043cfb-8f8f9508d0.zip\node_modules\typescript\lib\typescript.js:103134:17)
    at emitSourceFile (d:\temp\yarnpkg-sources\d0a670\.yarn\cache\typescript-patch-3fdb043cfb-8f8f9508d0.zip\node_modules\typescript\lib\typescript.js:101849:21)
    at pipelineEmitWithHint (d:\temp\yarnpkg-sources\d0a670\.yarn\cache\typescript-patch-3fdb043cfb-8f8f9508d0.zip\node_modules\typescript\lib\typescript.js:99690:24)
    at pipelineEmit (d:\temp\yarnpkg-sources\d0a670\.yarn\cache\typescript-patch-3fdb043cfb-8f8f9508d0.zip\node_modules\typescript\lib\typescript.js:99642:13)
    at print (d:\temp\yarnpkg-sources\d0a670\.yarn\cache\typescript-patch-3fdb043cfb-8f8f9508d0.zip\node_modules\typescript\lib\typescript.js:99576:13)
    at Object.writeFile (d:\temp\yarnpkg-sources\d0a670\.yarn\cache\typescript-patch-3fdb043cfb-8f8f9508d0.zip\node_modules\typescript\lib\typescript.js:99560:13)
    ```
