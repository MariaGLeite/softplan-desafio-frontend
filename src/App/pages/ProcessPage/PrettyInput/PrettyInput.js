import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  DivInput,
  Input,
  Bar,
  Label,
  Textarea
} from './PrettyInputStyle';

const PrettyInput = ({
  value, 
  onChange,
  width,
  resizable,
  label, 
}) => {
  const textAreaRef = useRef(null);
  const [isInputWithValue, setIsInputWithValue] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isLabelSmall, setIsLabelSmall] = useState(false);
	const [textAreaHeight, setTextAreaHeight] = useState('auto');
	const [textAreaParentHeight, setTextAreaParentHeight] = useState('auto');

  const handleShowSmallLabel = useCallback(event => {
    if(event._reactName === 'onFocus') {
      setIsInputFocused(true);
      return;
    }

    setIsInputFocused(false);
  }, []);

  const onChangeTextAreaValue = useCallback(e => {
    if(e.target.value.length < 390) {
      setTextAreaHeight("auto");
      setTextAreaParentHeight(`${textAreaRef.current.scrollHeight}px`);
      onChange(e);
    }
  }, [onChange]);

  useEffect(() => {
    if(!textAreaRef.current) return;
    setTextAreaParentHeight(`${textAreaRef.current.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
  }, [value]);

  useEffect(() => {
    if(value) {
      setIsInputWithValue(true);
      return;
    }

    setIsInputWithValue(false);
  }, [value]);

  useEffect(() => {
    if((isInputWithValue || isInputFocused)) {
      setIsLabelSmall(true);
      return;
    }

    setIsLabelSmall(false);
  }, [isInputWithValue, isInputFocused]);

  return (
    <DivInput {...{textAreaParentHeight, resizable, width}}>
      <Label {...{isLabelSmall}}>{label}</Label>

      {
        (
          resizable && 
          <Textarea 
            ref={textAreaRef}
            rows="1"
            onFocus={event => handleShowSmallLabel(event)}
            onBlur={event => handleShowSmallLabel(event)} 
            value={value}
            onChange={onChangeTextAreaValue}
            height={textAreaHeight}
            {...{width, isLabelSmall}} />
        ) ||

        <Input 
          onFocus={event => handleShowSmallLabel(event)}
          onBlur={event => handleShowSmallLabel(event)} 
          value={value}
          onChange={onChange}
          isLabelSmall={isLabelSmall} />
      }

      <Bar></Bar>
    </DivInput>
  );
}

export default PrettyInput;