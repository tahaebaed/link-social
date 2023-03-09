# Social media app

## Routes

| Page           | Path                      |
| -------------- | ------------------------- |
| Update Profile | `/setting/update-profile` |

## Components

### Dropdown

#### Usage

| Props       | Type                   | Default           | Description                                                   |
| ----------- | ---------------------- | ----------------- | ------------------------------------------------------------- |
| `noArrow`   | `Boolean`              | `false`           | hide dropdown arrow                                           |
| `toLeft`    | `Boolean`              | `false`           | change direction from left to right                           |
| `isOpen`    | `Boolean`              | `false`           | change init state for showing dropdown                        |
| `label`     | `String` `JSX.Element` | `<BsThreeDots />` | change displayed text (can be text or icon from `react-icon`) |
| `className` | `String`               | `''`              | add class to dropdown wrapper                                 |

#### Examples

Default Usage `<Dropdown />`

![Default Usage](assets/images/components/dropdown/default.png)

No Arrow `<Dropdown noArrow />`

![No Arrow](assets/images/components/dropdown/no-arrow.png)

Change Label `<Dropdown label='Dropdown' />` or `<Dropdown label={<TbGridDots />} />`

![Change Label](assets/images/components/dropdown/change-label.png)

To Left Direction `<Dropdown toLeft />`

![To Left Direction](assets/images/components/dropdown/to-left.png)

#### Playground

```jsx
import Dropdown from './components/Dropdown';

<Dropdown />
<Dropdown noArrow />
<Dropdown label='Dropdown' />
<Dropdown label={<TbGridDots />} />
<Dropdown isOpen={true} />
<Dropdown noArrow toLeft />

// add custom children
<Dropdown >
  ...
</Dropdown>
```

### Button

#### Usage

| Props       | Type      | Default | Description              |
| ----------- | --------- | ------- | ------------------------ |
| `outline`   | `Boolean` | `false` | create outline buttons   |
| `sm`        | `Boolean` | `false` | create small buttons     |
| `lg`        | `Boolean` | `false` | create bigger buttons    |
| `disabled`  | `Boolean` | `false` | disabled buttons actions |
| `className` | `String`  | `''`    | add class to button      |

#### Examples

Default Usage `<Button />`

![Default Usage](assets/images/components/button/buttons.png)

#### Playground

```jsx
import Button from './components/Button';

<Button />
<Button lg />
<Button sm />
<Button disabled />

// Outline
<Button outline />
<Button outline lg />
<Button outline sm />
<Button outline disabled />
```

### Banner

#### Props

| Props       | Type     | Default                                                       | Description                    |
| ----------- | -------- | ------------------------------------------------------------- | ------------------------------ |
| `cover`     | `String` | [`cover`](src/assets/images/background/banner-cover.webp)     | change Banner background image |
| `overlay`   | `String` | [`overlay`](src/assets/images/background/banner-overlay.webp) | change overlay image           |
| `title`     | `String` | `''`                                                          | add Banner title               |
| `subtitle`  | `String` | `''`                                                          | add Banner subtitle            |
| `className` | `String` | `''`                                                          | add class to Banner wrapper    |

#### Usage

```jsx
import Banner from './components/Banner';

<Banner title='Profile' subtitle="Welcome to your account dashboard!" />
```

## Layout

### Navbar

Consists of the following component:

1. [`Friends Dropdown`](src/layout/navbar/FriendsDropdown.jsx)
2. [`Messages Dropdown`](src/layout/navbar/MessageDropdown.jsx)
3. [`Notification Dropdown`](src/layout/navbar/NotificationDropdown.jsx)
4. [`User Dropdown`](src/layout/navbar/UserDropdown.jsx)
5. [`Query Search`](src/layout/navbar/QuerySearch.jsx)
6. [`Mobile Menu Dropdown`](src/layout/navbar/MobileMenu.jsx) (show only on mobile)

all of them depend on the [`NavbarDropdown`](src/layout/navbar/NavbarDropdown.jsx) component

#### Props

| Props       | Type                     | Default | Description                                                                            |
| ----------- | ------------------------ | ------- | -------------------------------------------------------------------------------------- |
| `label`     | `String` `React.Element` | `label` | change dropdown toggle label                                                           |
| `count`     | `Number`                 | `''`    | add notification counter                                                               |
| `pageUrl`   | `String`                 | `''`    | specify href for it's page                                                             |
| `pageLabel` | `String`                 | `''`    | change displayed text (can be text or icon from `react-icon`)                          |
| `type`      | `String`                 | `''`    | change button & toggle counter color, can be one of `friends, messages, notifications` |

#### Example

```jsx
<NavbarDropdown label={<MdOutlineEmojiEmotions />} count={21}>
  // ...
</NavbarDropdown>

// with page button (messages dropdown)
<NavbarDropdown
  label={<HiOutlineChatBubbleLeftRight />}
  count={61}
  pageUrl='/messages'
  pageLabel='View All Messages'
  type='messages'
>
  // ...
</NavbarDropdown>
```

## Hooks

### `usePageTitle`

### props

| Props | Type     | Default                    |
| ----- | -------- | -------------------------- |
| Title | `String` | The title for current page |

Hook for change page title

#### Example

```jsx
import usePageTitle from '../hooks/usePageTitle'

usePageTitle('Homepage')             // title will be 'Link | Homepage'

// Can use emoji
usePageTitle('Update Profile 🎉');   // title will be 'Link | Update Profile 🎉'
```

## Resources

- [`Github Repository`](https://github.com/tahaebaed/link-social)
- [`Theme 1`](https://html.crumina.net/html-olympus/02-ProfilePage.html?)
- [`Theme 2`](http://sociala.uitheme.net/home)
- [`trello Dashboard`](https://trello.com/b/Jqjk9udQ/simple-project-board)
- [`API Endpoint`](https://link-social.up.railway.app/api/v1)
