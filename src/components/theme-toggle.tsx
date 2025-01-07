import { useRef, useState } from "react"

import { DarkMode, Laptop, LightMode } from "@mui/icons-material"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import Fade from "@mui/material/Fade"
import IconButton from "@mui/material/IconButton"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import Paper from "@mui/material/Paper"
import Popper from "@mui/material/Popper"
import Tooltip from "@mui/material/Tooltip"
import { useColorScheme } from "@mui/material/styles"

type ColorMode = "light" | "dark" | "system"

type ModeOption = {
  mode: ColorMode
  label: string
  Icon: React.ElementType
}

const modeOptions: ModeOption[] = [
  { mode: "light", label: "Light", Icon: LightMode },
  { mode: "dark", label: "Dark", Icon: DarkMode },
  { mode: "system", label: "System", Icon: Laptop },
]

const ThemeToggle = () => {
  const [open, setOpen] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const { mode, setMode } = useColorScheme()
  const anchorRef = useRef<HTMLButtonElement>(null)

  if (!mode) {
    return null
  }

  const handleClose = () => {
    setOpen(false)
    setTooltipOpen(false)
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleModeSwitch = (mode: ColorMode) => {
    setMode(mode)
    handleClose()
  }

  const getModeIcon = () => {
    const currentMode = modeOptions.find((option) => option.mode === mode)
    return currentMode?.Icon ? <currentMode.Icon /> : null
  }

  return (
    <>
      <Tooltip
        title={`${mode} Mode`}
        onOpen={() => setTooltipOpen(true)}
        onClose={() => setTooltipOpen(false)}
        open={open ? false : !!tooltipOpen}
        slotProps={{ popper: { className: "capitalize" } }}
      >
        <IconButton
          ref={anchorRef}
          onClick={handleToggle}
          className="text-textPrimary"
        >
          {getModeIcon()}
        </IconButton>
      </Tooltip>
      <Popper
        open={open}
        transition
        disablePortal
        placement="bottom-start"
        anchorEl={anchorRef.current}
        className="min-is-[160px] !mbs-3 z-[1]"
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "right top",
            }}
          >
            <Paper className={"shadow-lg"}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList onKeyDown={handleClose}>
                  {modeOptions.map(({ mode: optionMode, label, Icon }) => (
                    <MenuItem
                      key={optionMode}
                      className="gap-3"
                      onClick={() => handleModeSwitch(optionMode)}
                      selected={mode === optionMode}
                    >
                      <Icon />
                      {label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default ThemeToggle
