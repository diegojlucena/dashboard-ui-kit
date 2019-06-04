import * as React from 'react'
import { H1, DatePicker, DatePickerRangeValue, DatePickerSimpleValue, DatePickerContainer, SelectDate } from 'components'
import { Button } from '@duik/it'

import { DocsContentPage, ExampleTable, ImportPath } from '../../components'


export const ReactDocsButton = () => {

  const [value1, setValue1] = React.useState<DatePickerSimpleValue>(null)
  const [value3, setValue3] = React.useState<DatePickerSimpleValue>(null)
  const [value2, setValue2] = React.useState<DatePickerRangeValue>({ from: null, to: null })
  const [value4, setValue4] = React.useState<DatePickerRangeValue>({ from: null, to: null })

  return (
    <DocsContentPage>
      {/* <PageContent data={[
        { id: 'appearence', label: 'Appearence' },
        { id: 'sizes', label: 'Sizes' },
        { id: 'states', label: 'States' },
        { id: 'custom-rendering', label: 'Custom DOM Rendering' },
        { id: 'with-icons', label: 'With Icons' },
        { id: 'props', label: 'Prop Table' },
        { id: 'migration', label: 'Migration from Dashboard UI Kit 3' },
      ]} /> */}
      <H1>DatePicker</H1>
      <ImportPath name="DatePicker" />
      <p>A datepicker shows a monthly calendar to choose a <code>single</code> date or a <code>range</code> with 0 external dependencies.</p>
      <br />
      <h2>Single Date Selection</h2>
      <ExampleTable fixed data={[
        {
          content: (
            <>
              <DatePickerContainer>
                <DatePicker value={value1} onChange={setValue1} minDate={new Date(2019, new Date().getMonth(), 5)} maxDate={new Date(2019, new Date().getMonth(), 25)} />
              </DatePickerContainer>
              <br />
              <br />
              <Button xs>Selected Date: {value1 && value1.toLocaleDateString() || 'none'}</Button>
            </>
          )
        },
      ]} />
      <h2>Range Pick</h2>
      <p>With max and min date</p>
      <ExampleTable fixed data={[
        {
          content: (
            <DatePickerContainer>
              <DatePicker isRange value={value2} onChange={setValue2} />
            </DatePickerContainer>
          )
        },
      ]} />
      <h2>Select Date</h2>
      <ExampleTable fixed data={[
        {
          content: (
            <>
              <SelectDate value={value3} onChange={setValue3} minDate={new Date(2019, new Date().getMonth(), 5)} maxDate={new Date(2019, new Date().getMonth(), 25)} />
            </>
          )
        },
      ]} />
      <h2>Select Date</h2>
      <ExampleTable fixed data={[
        {
          content: (
            <>
              <SelectDate isRange value={value4} onChange={setValue4} />
            </>
          )
        },
      ]} />
    </DocsContentPage>
  )
}

export default ReactDocsButton;