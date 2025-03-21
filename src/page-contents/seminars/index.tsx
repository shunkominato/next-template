'use client';

import { useActionState } from 'react';
import { Button, Chip } from '@mantine/core';
import { useForm } from '@mantine/form';
import Content from '@/src/components/ui/Layout/Content';
import { searchSeminars } from './actions';

export const initialValue = {
  chips: [] as string[],
};

export default function Seminars() {
  const form = useForm({
    initialValues: initialValue,
    onSubmitPreventDefault: 'validation-failed',
  });

  const [formState, formAction] = useActionState(searchSeminars, []);
  console.log(form.values);

  return (
    <Content>
      <form action={formAction}>
        <Chip.Group
          multiple
          value={form.values.chips}
          onChange={(value) => {
            form.setFieldValue('chips', value);
          }}
        >
          <Chip value="pregnancyAndChildRearing">Pregnancy & Child Rearing</Chip>
          <Chip value="nutrition">Nutrition</Chip>
        </Chip.Group>
        {form.values.chips.map((value, index) => (
          <input key={index} type="hidden" name="chips[]" value={value} />
        ))}
        <Button type="submit" variant="filled">
          Button
        </Button>
      </form>

      {formState.map((item) => {
        return <div key={item.title}>{item.title}</div>;
      })}
    </Content>
  );
}
