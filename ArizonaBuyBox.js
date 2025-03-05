import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ArizonaBuyBox() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-4">Arizona Investor Buy Box</h1>
      <p className="text-lg text-center max-w-3xl mb-8">
        We are actively seeking properties in Maricopa County, AZ that meet the following criteria:
      </p>

      <Card className="max-w-4xl w-full p-6 mb-8 shadow-xl">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-4">Property Type</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Single-family homes</li>
            <li>3+ bedrooms, 2+ bathrooms preferred</li>
            <li>1,200 – 3,000 sq. ft.</li>
            <li>Built after 1960 (unless a historic home with strong resale potential)</li>
            <li>No major foundation issues, fire damage, or structural issues</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="max-w-4xl w-full p-6 mb-8 shadow-xl">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-4">Price Range</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Purchase Price: $250K – $600K (below market value)</li>
            <li>After Repair Value (ARV): $400K – $900K</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="max-w-4xl w-full p-6 mb-8 shadow-xl">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-4">Location Criteria</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>High-demand neighborhoods with strong resale activity</li>
            <li>No flood zones</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="max-w-4xl w-full p-6 mb-8 shadow-xl">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-4">Deal Requirements</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Purchase at 70% ARV minus repairs (or better)</li>
            <li>Off-market or motivated sellers preferred</li>
            <li>Seller financing or creative deals welcomed</li>
            <li>Quick close potential</li>
          </ul>
        </CardContent>
      </Card>

      <a href="mailto:naishausrei@gmail.com">
        <Button className="text-lg px-8 py-4">Send Me Deals!</Button>
      </a>
    </div>
  );
}