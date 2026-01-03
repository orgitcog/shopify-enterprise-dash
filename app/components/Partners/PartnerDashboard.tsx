import React from 'react';
import { Card, Badge, BlockStack, InlineStack, Text, ProgressBar, Icon } from '@shopify/polaris';
import { TrendingUpIcon, PersonIcon, CashDollarIcon, ClockIcon } from '@shopify/polaris-icons';
import type { PartnerDashboardData, PartnerTier, PartnerType } from './types';

interface PartnerDashboardProps {
  data: PartnerDashboardData;
}

const tierColors: Record<PartnerTier, string> = {
  platinum: 'bg-purple-100 text-purple-800',
  gold: 'bg-yellow-100 text-yellow-800',
  silver: 'bg-gray-100 text-gray-800',
  bronze: 'bg-orange-100 text-orange-800'
};

const typeLabels: Record<PartnerType, string> = {
  agency: 'Agencies',
  integrator: 'Integrators',
  reseller: 'Resellers',
  developer: 'Developers',
  affiliate: 'Affiliates'
};

export function PartnerDashboard({ data }: PartnerDashboardProps) {
  const {
    totalPartners,
    activePartners,
    pendingApplications,
    totalRevenue,
    totalCommissions,
    pendingPayouts,
    partnersByTier,
    partnersByType,
    recentActivity,
    monthlyMetrics
  } = data;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${Math.floor(diffHours / 24)}d ago`;
  };

  // Calculate max for chart scaling
  const maxRevenue = Math.max(...monthlyMetrics.map(m => m.revenue));

  return (
    <BlockStack gap="400">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <BlockStack gap="300">
            <InlineStack align="space-between">
              <Text as="p" variant="bodySm" tone="subdued">Total Partners</Text>
              <Icon source={PersonIcon} tone="subdued" />
            </InlineStack>
            <Text as="p" variant="headingXl">{totalPartners}</Text>
            <InlineStack gap="200">
              <Badge tone="success">{activePartners} active</Badge>
              {pendingApplications > 0 && (
                <Badge tone="attention">{pendingApplications} pending</Badge>
              )}
            </InlineStack>
          </BlockStack>
        </Card>

        <Card>
          <BlockStack gap="300">
            <InlineStack align="space-between">
              <Text as="p" variant="bodySm" tone="subdued">Partner Revenue</Text>
              <Icon source={TrendingUpIcon} tone="subdued" />
            </InlineStack>
            <Text as="p" variant="headingXl">{formatCurrency(totalRevenue)}</Text>
            <InlineStack gap="200">
              <Badge tone="success">+18.2% vs last month</Badge>
            </InlineStack>
          </BlockStack>
        </Card>

        <Card>
          <BlockStack gap="300">
            <InlineStack align="space-between">
              <Text as="p" variant="bodySm" tone="subdued">Total Commissions</Text>
              <Icon source={CashDollarIcon} tone="subdued" />
            </InlineStack>
            <Text as="p" variant="headingXl">{formatCurrency(totalCommissions)}</Text>
            <Text as="p" variant="bodySm" tone="subdued">
              Lifetime partner earnings
            </Text>
          </BlockStack>
        </Card>

        <Card>
          <BlockStack gap="300">
            <InlineStack align="space-between">
              <Text as="p" variant="bodySm" tone="subdued">Pending Payouts</Text>
              <Icon source={ClockIcon} tone="subdued" />
            </InlineStack>
            <Text as="p" variant="headingXl">{formatCurrency(pendingPayouts)}</Text>
            <InlineStack gap="200">
              <Badge tone="warning">Due Feb 15</Badge>
            </InlineStack>
          </BlockStack>
        </Card>
      </div>

      {/* Charts and Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Monthly Revenue Chart */}
        <Card>
          <BlockStack gap="400">
            <Text as="h3" variant="headingMd">Monthly Revenue Trend</Text>
            <div className="flex items-end justify-between h-40 gap-2">
              {monthlyMetrics.map((month, index) => {
                const height = (month.revenue / maxRevenue) * 100;
                return (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors cursor-pointer"
                      style={{ height: `${Math.max(height, 5)}%` }}
                      title={`${formatCurrency(month.revenue)}`}
                    />
                    <Text as="span" variant="bodySm" tone="subdued" alignment="center">
                      {month.month.split(' ')[0]}
                    </Text>
                  </div>
                );
              })}
            </div>
          </BlockStack>
        </Card>

        {/* Partners by Tier */}
        <Card>
          <BlockStack gap="400">
            <Text as="h3" variant="headingMd">Partners by Tier</Text>
            <BlockStack gap="300">
              {partnersByTier.map((tier) => (
                <div key={tier.tier}>
                  <InlineStack align="space-between">
                    <InlineStack gap="200">
                      <span className={`px-2 py-1 rounded text-xs font-medium capitalize ${tierColors[tier.tier]}`}>
                        {tier.tier}
                      </span>
                    </InlineStack>
                    <Text as="span" variant="bodyMd" fontWeight="semibold">{tier.count}</Text>
                  </InlineStack>
                  <div className="mt-1">
                    <ProgressBar
                      progress={(tier.count / totalPartners) * 100}
                      size="small"
                      tone={tier.tier === 'platinum' ? 'primary' : 'success'}
                    />
                  </div>
                </div>
              ))}
            </BlockStack>
          </BlockStack>
        </Card>

        {/* Partners by Type */}
        <Card>
          <BlockStack gap="400">
            <Text as="h3" variant="headingMd">Partners by Type</Text>
            <BlockStack gap="300">
              {partnersByType.map((type) => {
                const percentage = (type.count / totalPartners) * 100;
                return (
                  <div key={type.type}>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">{typeLabels[type.type]}</Text>
                      <Text as="span" variant="bodyMd" fontWeight="semibold">
                        {type.count} ({percentage.toFixed(0)}%)
                      </Text>
                    </InlineStack>
                    <div className="mt-1">
                      <ProgressBar progress={percentage} size="small" />
                    </div>
                  </div>
                );
              })}
            </BlockStack>
          </BlockStack>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <BlockStack gap="400">
          <InlineStack align="space-between">
            <Text as="h3" variant="headingMd">Recent Activity</Text>
            <Badge>Live</Badge>
          </InlineStack>
          <BlockStack gap="300">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <InlineStack gap="300">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <BlockStack gap="050">
                    <Text as="span" variant="bodyMd">{activity.action}</Text>
                    <Text as="span" variant="bodySm" tone="subdued">{activity.partner}</Text>
                  </BlockStack>
                </InlineStack>
                <Text as="span" variant="bodySm" tone="subdued">{formatTime(activity.date)}</Text>
              </div>
            ))}
          </BlockStack>
        </BlockStack>
      </Card>
    </BlockStack>
  );
}
