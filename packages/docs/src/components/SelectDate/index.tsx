import React from 'react'
import classnames from 'classnames'
import { DatePicker, DatePickerProps, DatePickerValue, DatePickerRangeValue, DatePickerSimpleValue } from '../Date'
import { Dropdown, useOpenState, ContentTitle } from '@duik/it'
import cls from './styles.module.scss'

export type SelectDateProps<M extends boolean> = React.ComponentProps<typeof Dropdown> & DatePickerProps<M> & {
  placeholder?: React.ReactNode,
  label?: React.ReactNode,
}

const renderValue = <M extends boolean = false>(date?: DatePickerValue<M>, isRange?: boolean, placeholder?: React.ReactNode, ) => {
  if (!date) {
    return placeholder
  }

  if (isRange) {
    const dateRange = date as DatePickerRangeValue
    if (!dateRange.to && !dateRange.from) {
      return placeholder
    }
    return (
      <>{dateRange.from && <strong>{dateRange.from.toLocaleDateString()}</strong> || placeholder}&nbsp;&nbsp;═&nbsp;&nbsp;{dateRange.to && <strong>{dateRange.to.toLocaleDateString()}</strong> || placeholder} </>
    )
  }

  return <strong>{(date as Date).toLocaleDateString() || '-'}</strong>
}

export const SelectDate = <M extends boolean = false>(props: SelectDateProps<M>) => {

  const openControls = useOpenState()

  const {
    // Datepicker Props
    renderTitle,
    renderMonthName,
    renderWeekdayShort,
    isRange,
    value,
    onDateChange,
    minDate,
    maxDate,
    initialVisibleDate,
    //other
    placeholder = 'Select Date',
    label,
    // rest is dropdown props
    ...dropdownProps
  } = props

  const onDateChangeSelect = (value: DatePickerValue<M>) => {
    if (onDateChange) {
      onDateChange(value)
    }
    if (!isRange) {
      openControls.handleClose()
    } else {
      if (value && (value as DatePickerRangeValue).to) {
        openControls.handleClose()
      }
    }
  }

  const datepickerProps = {
    renderTitle,
    renderMonthName,
    renderWeekdayShort,
    isRange,
    value,
    onDateChange: onDateChangeSelect,
    minDate,
    maxDate,
    initialVisibleDate,
  }

  const {
    menuProps = {}
  } = dropdownProps

  return (
    <>
      {label && (
        <ContentTitle>{label}</ContentTitle>
      )}
      <Dropdown
        openControls={openControls}
        buttonText={renderValue(value, isRange, placeholder)}
        menuProps={{
          ...menuProps,
          className: classnames(cls['select-date-dropdown'], menuProps.className)
        }}
        {...dropdownProps}
      >
        <DatePicker {...datepickerProps} />
      </Dropdown>
    </>
  )
}