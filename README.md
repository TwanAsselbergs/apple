# Apple

## Table of Contents

- [Self-Service System Happy Herbivore](#self-service-system-happy-herbivore)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Author(s)](#authors)
  - [License](#license)

## Overview

This project is a self-service ordering system created as a school assignment for a fictional company, _Happy Herbivore_. The system is divided into three main parts:

1. API (`/server`)

   - Supplies product data to the front-end.
   - Handles incoming orders by storing them in the database.
   - Uses WebSockets to broadcast new orders to the dashboard in real time.

2. Front-end (`/react`)

   - A user-friendly application designed for customers to browse products and place orders.
   - Provides a seamless ordering experience on a touchscreen or kiosk.

3. Back-end (`/dashboard`)

   - A dashboard accessible only to employees.
   - Displays incoming orders and relevant statistics for order management.

4. Documents (`/docs`)
   - The video, receipt and questions from the field research (`/docs/field-research`)
   - Test documents (compatibility- functional- and performance test) (`/docs/tests`)
   - Database ERD, functional design and UI design.

## Author(s)

- **Twan Asselbergs** - [TwanAsselbergs](https://github.com/TwanAsselbergs)

## License

This project is licensed under the [MIT](LICENSE.md)
License - see the [LICENSE.md](LICENSE.md) file for
details
