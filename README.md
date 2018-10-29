# showSyslog
Show contents of syslog

## build
- Create a new folder under `stage/src`, called `syslog`.

- Download the contents of this repository to the new folder

- Add an entry to `stage/src/solution/kit.json`, as shown:
```json
    "modules": [
        "tc-aw-solution",
        "syslog"
    ],
```
- Use `gwtcompile` to generate a new WAR file, then deploy.
    
## usage
After building and deploying the code, add a new page to a stylesheet.  

For instance, to add to User Profile edit *Awp0UserSummary* stylesheet, and add the snippet below:

    <page titleKey="System Logs">
        <htmlPanel declarativeKey="syslog"/>
    </page>

This will show an additional page on the User Profile, as shown below:

![screenshot](syslog.png)
