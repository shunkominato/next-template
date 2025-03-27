'use client';

import { useActionState } from 'react';
import { Button, Chip } from '@mantine/core';
import { useForm } from '@mantine/form';
import Content from '@/src/components/ui/Layout/Content';
import { searchSeminars } from './actions';

export const initialValue = {
  categories: [] as string[],
};

export default function Seminars() {
  const form = useForm({
    initialValues: initialValue,
  });

  const [seminarList, formAction] = useActionState(searchSeminars, []);

  return (
    <Content>
      <form action={formAction}>
        <Chip.Group
          multiple
          value={form.values.categories}
          onChange={(value) => {
            form.setFieldValue('categories', value);
          }}
        >
          <Chip value="pregnancyAndChildRearing">Pregnancy & Child Rearing</Chip>
          <Chip value="nutrition">Nutrition</Chip>
        </Chip.Group>
        {form.values.categories.map((value, index) => (
          <input key={index} type="hidden" name="categories[]" value={value} />
        ))}
        <Button type="submit" variant="filled">
          Button
        </Button>
      </form>

      {seminarList.map((item) => {
        return <div key={item.title}>{item.title}</div>;
      })}
    </Content>
  );
}
