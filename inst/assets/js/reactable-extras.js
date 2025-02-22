let ReRenderCount = 0;

function GenerateTooltipId () {
  return "tooltip-" + ReRenderCount++;
}

function TooltipExtras ({ column, tooltip, theme }) {
  const tooltip_id = GenerateTooltipId();
  React.useEffect(() => {
    tippy("#" + tooltip_id, { content: tooltip, theme: theme });
  }, []);
  return React.createElement(
    'span',
    { id: tooltip_id },
    column
  )
}

function ButtonExtras ({ id, label, uuid, column, className, children }) {
  const onClick = event => {
    Shiny.setInputValue(id, { row: uuid, column: column}, { priority: 'event' })
  }

  return React.createElement('button', { onClick, className, key: uuid }, label)
};

function checkboxExtras ({ id, value, uuid, column, className, children }) {

  const onChange = event => {
    Shiny.setInputValue(id, { row: uuid, value: event.target.checked, column: column }, { priority: 'event' })
  }

  return React.createElement('input', { type: 'checkbox', key: uuid, defaultChecked: value, className, onChange })
};

function dateExtras ({ id, value, uuid, column, className, children }) {

  const onChange = event => {
    Shiny.setInputValue(id, { row: uuid, value: event.target.value, column: column }, { priority: 'event' })
  }

  return React.createElement(
    'input',
    { type: 'date', key: uuid, defaultValue: value, onChange, className }
  )
};

function dropdownExtras ({ id, value, uuid, column, choices, className, children }) {

  const onChange = event => {
    Shiny.setInputValue(id, { row: uuid, value: event.target.value, column: column }, { priority: 'event' })
  }

  const items = choices.map((name) => {
    return React.createElement('option', { value: name }, name)
  })

  return React.createElement(
    'select',
    { onChange, className, key: uuid, defaultValue: value },
    items
  )
};

function textExtras ({ id, value, uuid, column, page, className, children }) {

  const onInput = event => {
    Shiny.setInputValue(id, { row: uuid, value: event.target.value, column: column }, { priority: 'event' })
  }

  return React.createElement(
    'input',
    { onInput, className, defaultValue: value, key: uuid }
  )
};

