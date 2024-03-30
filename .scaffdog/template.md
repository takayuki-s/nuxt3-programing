---
name: 'template'
root: '.'
output: '.'
ignore: []
questions:
  name: 'コンポーネント名を入力してください'
  level:
    message: 'コンポーネントの粒度を選択してください'
    choices:
      - 'atoms'
      - 'molecules'
      - 'organisms'
      - 'templates'
---

# `components/{{ inputs.level }}/{{ inputs.name }}/index.vue`

```

```

# `components/{{ inputs.level }}/{{ inputs.name }}/index.stories.ts`

```

```

# `components/{{ inputs.level }}/{{ inputs.name }}/index.test.ts`

```

```
