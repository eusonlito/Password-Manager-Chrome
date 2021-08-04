[Spanish](readme.md)

### Google Chrome Extension for Password Manager

This extension connects to the application https://github.com/eusonlito/Password-Manager to allow access to passwords directly from any website.

It must be installed from developer mode, as it is not published in the Chrome extensions store.

1. We clone the Github repository in a local directory:

```bash
git clone https://github.com/eusonlito/Password-Manager-Chrome.git
```

2. Go to the Chrome option `Menu`>` More Tools`> `Extensions`

3. At the top right we activate the option of `Developer Mode`

4. We access the new button `Load Unpacked`

5. We select the directory that we have just cloned.

6. In `Endpoint` we indicate the root of the web where we have installed the password manager, for example `https://password.domain.com`

7. In `API KEY` we paste the API KEY that we can generate from your password manager profile.

8. We save and try to press the application button on any website that we have registered in the password manager.

### Screenshots

![Password-Manager-Chrome](https://user-images.githubusercontent.com/644551/128035125-32c7521c-aac1-4727-9e1d-be33984b1ac5.png)

![Password-Manager-Chrome](https://user-images.githubusercontent.com/644551/128035231-d8bc1e19-13e5-42ff-bbce-0b20caa74be9.png)