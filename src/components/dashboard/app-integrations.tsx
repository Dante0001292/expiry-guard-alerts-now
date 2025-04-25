
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Shopify, Package, CreditCard } from "lucide-react";

export function AppIntegrations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>App Integrations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
            <Shopify className="h-8 w-8" />
            <span>Connect Shopify</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
            <Package className="h-8 w-8" />
            <span>Connect WooCommerce</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
            <CreditCard className="h-8 w-8" />
            <span>Connect QuickBooks</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
