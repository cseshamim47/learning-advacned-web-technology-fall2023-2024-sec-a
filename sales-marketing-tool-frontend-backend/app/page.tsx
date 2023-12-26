
import Image from 'next/image'
import Button from '@mui/material/Button';
import { Dropdown } from 'flowbite-react';

export default function Home() {
  return (
    <main>
      <Dropdown label="Dropdown button" dismissOnClick={false}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
    </main>
  )
}
