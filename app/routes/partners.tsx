import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState, useCallback } from 'react';
import { Page, Card, Tabs, Button, ButtonGroup } from '@shopify/polaris';
import {
  PartnerDashboard,
  PartnerDirectory,
  PartnerPerformance,
  AffiliateProgram,
  generateMockPartners,
  generateMockDashboardData,
  generateMockAffiliateLinks,
  generateMockReferrals,
  generateMockCommissions,
  generateMockApplications
} from '../components/Partners';

export async function loader() {
  try {
    // In production, this would fetch from Supabase
    const partners = generateMockPartners();
    const dashboardData = generateMockDashboardData();
    const affiliateLinks = generateMockAffiliateLinks();
    const referrals = generateMockReferrals();
    const commissions = generateMockCommissions();
    const applications = generateMockApplications();

    return json({
      partners,
      dashboardData,
      affiliateLinks,
      referrals,
      commissions,
      applications,
      error: null
    });
  } catch (error) {
    console.error("Error loading partner data:", error);
    return json({
      partners: generateMockPartners(),
      dashboardData: generateMockDashboardData(),
      affiliateLinks: generateMockAffiliateLinks(),
      referrals: generateMockReferrals(),
      commissions: generateMockCommissions(),
      applications: generateMockApplications(),
      error: "Failed to load partner data"
    });
  }
}

export default function Partners() {
  const {
    partners,
    dashboardData,
    affiliateLinks,
    referrals,
    commissions,
    _applications
  } = useLoaderData<typeof loader>();

  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback((selectedTabIndex: number) => {
    setSelected(selectedTabIndex);
  }, []);

  const tabs = [
    { id: 'overview', content: 'Overview' },
    { id: 'directory', content: 'Partner Directory' },
    { id: 'performance', content: 'Performance' },
    { id: 'affiliates', content: 'Affiliate Program' }
  ];

  const handleExport = () => {
    // In production, this would generate a CSV/Excel export
    console.log('Exporting partner data...');
  };

  const handleInvitePartner = () => {
    // In production, this would open an invite modal
    console.log('Opening partner invite modal...');
  };

  return (
    <Page
      title="Partner Portal"
      subtitle="Manage partners, track performance, and run affiliate programs"
      primaryAction={{
        content: 'Invite Partner',
        onAction: handleInvitePartner
      }}
      secondaryActions={[
        {
          content: 'Export Data',
          onAction: handleExport
        }
      ]}
    >
      <Card>
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} />
            <ButtonGroup>
              <Button onClick={() => window.location.reload()}>Refresh</Button>
            </ButtonGroup>
          </div>

          {selected === 0 && (
            <div className="mt-6">
              <PartnerDashboard data={dashboardData} />
            </div>
          )}

          {selected === 1 && (
            <div className="mt-6">
              <PartnerDirectory
                partners={partners}
                onPartnerUpdate={(partner) => {
                  console.log('Partner updated:', partner);
                }}
              />
            </div>
          )}

          {selected === 2 && (
            <div className="mt-6">
              <PartnerPerformance
                partners={partners}
                commissions={commissions}
              />
            </div>
          )}

          {selected === 3 && (
            <div className="mt-6">
              <AffiliateProgram
                affiliateLinks={affiliateLinks}
                referrals={referrals}
                partners={partners}
                onCreateLink={(partnerId, code) => {
                  console.log('Creating affiliate link:', { partnerId, code });
                }}
              />
            </div>
          )}
        </div>
      </Card>
    </Page>
  );
}
