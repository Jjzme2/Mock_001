export interface MenuItem {
  name: string
  description: string
  price: number
  tag?: string
  dietary?: string[]
}

export interface MenuSection {
  id: string
  label: string
  items: MenuItem[]
}

export const menuSections: MenuSection[] = [
  {
    id: 'starters',
    label: 'Starters',
    items: [
      {
        name: 'Charred Ramp Bisque',
        description: 'Wood-fired ramp, crème fraîche, chive oil, toasted sourdough croutons',
        price: 16,
        dietary: ['v'],
      },
      {
        name: 'Duck Confit Crostini',
        description: 'Slow-rendered duck leg, cherry gastrique, pickled fennel, pea shoot',
        price: 19,
      },
      {
        name: 'Burrata & Morels',
        description: 'Fresh burrata, sautéed morel mushrooms, herb oil, toasted pine nuts, aged balsamic',
        price: 18,
        dietary: ['v'],
      },
      {
        name: 'Oak-Smoked Salmon',
        description: 'House-smoked Atlantic salmon, whipped dill cream, cucumber ribbons, rye crackers',
        price: 22,
      },
      {
        name: 'Ember-Kissed Bone Marrow',
        description: 'Roasted split marrow, chimichurri, pickled shallots, grilled sourdough',
        price: 21,
      },
      {
        name: 'Wagyu Beef Tartare',
        description: 'Hand-cut A5 wagyu, truffle aioli, crispy capers, quail egg, grissini',
        price: 28,
        tag: 'New',
      },
    ],
  },
  {
    id: 'mains',
    label: 'Mains',
    items: [
      {
        name: 'Dry-Aged Ribeye',
        description: '42-day dry-aged 16oz ribeye, bone marrow butter, roasted garlic jus, charred asparagus',
        price: 58,
      },
      {
        name: 'Hearth-Roasted Duck',
        description: 'Whole roasted half duck, spring pea purée, crispy duck fat potatoes, cherry-port reduction',
        price: 46,
        tag: "Chef's Pick",
      },
      {
        name: 'Grilled Halibut',
        description: 'Wild Pacific halibut, white bean ragout, preserved lemon beurre blanc, watercress salad',
        price: 42,
      },
      {
        name: 'Forest Mushroom Risotto',
        description: 'Carnaroli rice, seasonal wild mushrooms, truffle oil, aged Parmigiano, chive',
        price: 34,
        dietary: ['v', 'gf'],
      },
      {
        name: 'Braised Short Rib',
        description: '72-hour red wine braise, celery root purée, crispy shallots, horseradish gremolata',
        price: 52,
      },
      {
        name: 'Whole Roasted Chicken',
        description: 'Free-range spatchcock chicken, herb jus, roasted root vegetables, pan drippings gravy',
        price: 38,
        tag: 'For Two',
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        name: 'Valrhona Fondant',
        description: 'Warm dark chocolate fondant, Tahitian vanilla ice cream, cocoa soil, salted caramel',
        price: 14,
        dietary: ['v'],
      },
      {
        name: 'Honey Panna Cotta',
        description: 'Tennessee wildflower honey panna cotta, macerated strawberries, mint, honeycomb',
        price: 12,
        dietary: ['v', 'gf'],
      },
      {
        name: 'Cheese Selection',
        description: 'Three artisan cheeses, seasonal preserves, marcona almonds, house lavash crackers',
        price: 22,
        dietary: ['v'],
      },
      {
        name: 'Meyer Lemon Tart',
        description: 'Meyer lemon curd, almond pastry shell, toasted Italian meringue, candied zest',
        price: 13,
        dietary: ['v'],
      },
    ],
  },
]
