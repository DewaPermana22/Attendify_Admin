import { Card, Col, Menu, Row, Statistic } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import {
    TeamOutlined,
    FileTextOutlined,
    DollarOutlined,
    BellOutlined,
  } from '@ant-design/icons';
import CardComponent from '../components/Card';
function page() {
  return (
    <div>
        <Title level={2} className="mb-6" style={{color : '#000000'}}>Dashboard</Title>
          <Row gutter={16}>
            <Col span={6}>
              <Card>
                <Statistic
                  title="Total Employees"
                  value={254}
                  prefix={<TeamOutlined />}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card style={{ backgroundColor: '#3b82f6' }}>
                <Statistic
                  title="Active Tasks"
                  value={42}
                  prefix={<FileTextOutlined />}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic
                  title="Pending Approvals"
                  value={7}
                  prefix={<BellOutlined />}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic
                  title="Total Salary"
                  value="$548,760"
                  prefix={<DollarOutlined />}
                />
              </Card>
            </Col>
          </Row>

          <Row gutter={16} className="mt-6">
            <Col span={16}>
              <Card title="Recent Activities">
                <p>Recent employee and task activities will be displayed here.</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Quick Actions">
                <Menu
                  mode="vertical"
                  items={[
                    { key: 'add-employee', label: 'Add New Employee' },
                    { key: 'create-task', label: 'Create New Task' },
                    { key: 'generate-report', label: 'Generate Report' }
                  ]}
                />
              </Card>
            </Col>
          </Row>
          <CardComponent/>
    </div>
  )
}

export default page