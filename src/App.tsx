import { useState } from 'react'

import { Header } from '@/components/Header'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { CardContent } from '@/components/CardContent'
import { sectionData } from '@/data/mockData'

import './App.css'

function App() {
  const [sectionExpanded, setSectionExpanded] = useState(true)
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    Person: true,
    'Random List': true,
    'list-Person': true,
  })

  const toggleCard = (key: string) => {
    setExpandedCards(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Section
          name={sectionData.name}
          count={sectionData.count}
          expanded={sectionExpanded}
          onToggle={() => setSectionExpanded(prev => !prev)}
        >
          <div className="card-grid">
            {sectionData.nodes.map(node => {
              const isExpandable = node.type === 'object' || node.type === 'array'
              const isExpanded = expandedCards[node.key] ?? false

              return (
                <Card
                  key={node.key}
                  icon={node.icon}
                  title={node.key}
                  value={node.value}
                  expandable={isExpandable}
                  expanded={isExpanded}
                  onToggle={() => toggleCard(node.key)}
                >
                  {node.type === 'object' && node.content && (
                    <CardContent type="object" properties={node.content} />
                  )}
                  {node.type === 'array' && node.items && (
                    <CardContent
                      type="array"
                      items={node.items}
                      expandedCards={expandedCards}
                      onToggleCard={toggleCard}
                    />
                  )}
                </Card>
              )
            })}
          </div>
        </Section>
      </div>
    </div>
  )
}

export default App
