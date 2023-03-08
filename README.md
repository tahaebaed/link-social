# Social media app

## Components

### Dropdown

#### Usage

| Props       | Type      | Default      | Description                            |
| ----------- | --------- | ------------ | -------------------------------------- |
| `noArrow`   | `Boolean` | `false`      | hide dropdown arrow                    |
| `toLeft`    | `Boolean` | `false`      | change direction from left to right    |
| `isOpen`    | `Boolean` | `false`      | change init state for showing dropdown |
| `label`     | `String` `JSX.Element` | `<BsThreeDots />`                      | change displayed text (can be text or icon from `react-icon`) |
| `className` | `String`  | `''`         | add class to dropdown wrapper          |

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
