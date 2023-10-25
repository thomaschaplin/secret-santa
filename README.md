# Secret Santa

<img src="assets/santa.png" alt="logo" width="325"/>

Welcome to Secret Santa, a web application that simplifies the process of pairing participants for your Secret Santa gift exchange. This tool allows you to set up your Secret Santa event with specific rules and exclusions to make the holiday gift exchange even more fun and exciting. This is a clone of the original repo [arcanis/secretsanta](https://github.com/arcanis/secretsanta) with some customisation and changes.

## Table of Contents

- [Secret Santa](#secret-santa)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Getting Started](#getting-started)
  - [How to Use This Tool](#how-to-use-this-tool)
  - [Customization](#customization)
  - [Contributing](#contributing)
  - [License (MIT)](#license-mit)

## Demo

If you want to see a demo of this Secret Santa generator in action, you can visit the website hosted at [www.thomaschaplin.me/secret-santa](https://www.thomaschaplin.me/secret-santa)

## Getting Started

To get started, you can follow these steps to run the Secret Santa Generator:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/thomaschaplin/secret-santa.git
   ```

2. Navigate to the project directory:

   ```bash
   cd secret-santa
   ```

3. Open the `index.html` file in your web browser.

That's it! You're now ready to start generating Secret Santa pairings for your event.

## How to Use This Tool

1. **Enter Participant Names:**

   Start by entering the names of the people who will be participating in your Secret Santa event, one per line. You can add participants with or without additional details using parentheses.

   Example:
   - Thomas
   - Frank (The Elf)

2. **Set Exclusions:**

   You can prevent someone from being paired with another participant by using the `!` symbol.

   Example:
   - Jane !Robert
   - Robert !Jane

3. **Multiple Exclusions:**

   If you need to exclude a participant from being paired with multiple people, you can do so by listing all exclusions on a single line. However, be cautious with this, as too many exclusion rules can limit the possible pairings and make your Secret Santa less interesting.

   Example:
   - Thomas !Jane !Frank (The Elf)

4. **Force Pairing:**

   You can also specify pairings if you have a specific pairing in mind. Use the `=` symbol to force participants to be paired together.

   Example:
   - Thomas =Frank (The Elf)

## Customization

You can customise the Secret Santa generator by modifying the code in this repository. Feel free to add new features, improve the user interface, or enhance the pairing algorithm to better suit your needs. Contributions are always welcome!

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the repository to your own GitHub account.

2. Create a new branch with a descriptive name:

   ```bash
   git checkout -b feature/my-feature
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add a new feature"
   ```

4. Push your changes to your forked repository:

   ```bash
   git push origin feature/my-feature
   ```

5. Open a pull request from your fork to this repository, explaining the changes you've made.

6. Your pull request will be reviewed, and once accepted, your changes will be merged into the main project.

Have a fun and festive Secret Santa event with the Secret Santa Generator!

## License (MIT)

> **Copyright © 2015 Maël Nison**
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
