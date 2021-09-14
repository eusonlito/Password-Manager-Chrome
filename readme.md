[Spanish](readme.md)

### Google Chrome Extension for Password Manager

This extension connects to the application https://github.com/eusonlito/Password-Manager to allow access to passwords directly from any website.

It must be installed from developer mode, as it is not published in the Chrome extensions store.

1. Clone the Github repository in a local directory:

```bash
git clone https://github.com/eusonlito/Password-Manager-Chrome.git
```

2. Go to the Chrome option `Menu`>` More Tools`> `Extensions`

3. At the top right Activate the option of `Developer Mode`

4. Access the new button `Load Unpacked`

5. Select the directory that you have just cloned.

6. In `Endpoint` indicate the root of the web where you have installed the password manager, for example `https://password.domain.com`

7. In `API KEY` paste the API KEY that you can generate from your password manager profile.

8. Save and try to press the application button on any website that you have registered in the password manager.

### API KEY Secret

If you have configured the API with `auth.api.secret_enabled` you need to fill the `API KEY Secret` on every IP change.

### Screenshots

![Password-Manager-Chrome](https://user-images.githubusercontent.com/644551/128035125-32c7521c-aac1-4727-9e1d-be33984b1ac5.png)

![Password-Manager-Chrome](https://user-images.githubusercontent.com/644551/128035231-d8bc1e19-13e5-42ff-bbce-0b20caa74be9.png)