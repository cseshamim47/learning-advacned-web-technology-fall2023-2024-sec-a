'use client'
import { Dropdown } from "flowbite-react"

const MyDropdown = () => {
  return (
    <Dropdown label="Dropdown button">
                    <Dropdown.Item>
                        All
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Most Recent
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Oldest First
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Good Review
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Bad Review
                    </Dropdown.Item>
    </Dropdown>
  )
}
export default MyDropdown