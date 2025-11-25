import React, { useState, useRef, useEffect } from 'react';
import {
    Search,
    Filter,
    Eye,
    CheckCircle,
    XCircle,
    ShoppingBag,
    Package,
    Tag,
    IndianRupee,
    Box,
    AlertTriangle,
    FileText,
    Store
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Sample data
const pendingProducts = [
    {
        id: 1,
        name: 'Handcrafted Pashmina Shawl',
        vendor: 'Kashmir Crafts',
        category: 'Textiles',
        price: 5000,
        stock: 45,
        status: 'pending',
        description: 'Authentic hand-woven Pashmina shawl from Kashmir valley.',
        image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80'
    },
    {
        id: 2,
        name: 'Blue Pottery Set',
        vendor: 'Jaipur Artisans',
        category: 'Handicrafts',
        price: 2500,
        stock: 30,
        status: 'pending',
        description: 'Traditional blue pottery dinner set, lead-free and microwave safe.',
        image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80'
    },
    {
        id: 3,
        name: 'Madhubani Painting',
        vendor: 'Bihar Art Gallery',
        category: 'Art',
        price: 3500,
        stock: 15,
        status: 'pending',
        description: 'Original Madhubani painting on handmade paper using natural dyes.',
        image: 'https://images.unsplash.com/photo-1582560475093-d09bc5052771?w=800&q=80'
    }
];

const approvedProducts = [
    {
        id: 101,
        name: 'Darjeeling Tea Collection',
        vendor: 'Tea Gardens India',
        category: 'Food & Beverage',
        price: 800,
        stock: 120,
        status: 'approved',
        description: 'Premium first flush Darjeeling tea gift box.',
        image: 'https://images.unsplash.com/photo-1563911892437-1feda9d5e344?w=800&q=80'
    },
    {
        id: 102,
        name: 'Sandalwood Carving',
        vendor: 'Mysore Crafts',
        category: 'Handicrafts',
        price: 1200,
        stock: 25,
        status: 'approved',
        description: 'Intricate sandalwood carving of an elephant.',
        image: 'https://images.unsplash.com/photo-1599629954294-14579787c204?w=800&q=80'
    }
];

const rejectedProducts = [
    {
        id: 201,
        name: 'Plastic Souvenir Keychain',
        vendor: 'Cheap Gifts Co.',
        category: 'Souvenirs',
        price: 50,
        stock: 500,
        status: 'rejected',
        description: 'Mass-produced plastic keychain.',
        image: 'https://images.unsplash.com/photo-1622618991746-fe6004db3d47?w=800&q=80',
        reason: 'Low quality, not authentic local craft'
    }
];

export default function Marketplace() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('all'); // 'all', 'pending', 'approved', 'rejected'
    const productsListRef = useRef(null);
    const [isGlowing, setIsGlowing] = useState(false);
    const [viewingImage, setViewingImage] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                if (viewingImage) {
                    setViewingImage(null);
                } else {
                    setSelectedProduct(null);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [viewingImage]);

    const handleApprove = (productId) => {
        console.log('Approving product:', productId);
    };

    const handleReject = (productId) => {
        console.log('Rejecting product:', productId);
    };

    const scrollToProducts = (tab) => {
        setActiveTab(tab);
        if (productsListRef.current) {
            productsListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsGlowing(true);
            setTimeout(() => setIsGlowing(false), 2000);
        }
    };

    const allProducts = [...pendingProducts, ...approvedProducts, ...rejectedProducts];

    const getProductsByTab = () => {
        switch (activeTab) {
            case 'pending': return pendingProducts;
            case 'approved': return approvedProducts;
            case 'rejected': return rejectedProducts;
            default: return allProducts;
        }
    };

    const filteredProducts = getProductsByTab().filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalProducts = allProducts.length;

    const getStatusBadge = (status) => {
        switch (status) {
            case 'approved': return <Badge className="bg-green-500 hover:bg-green-600">Approved</Badge>;
            case 'pending': return <Badge className="bg-orange-500 hover:bg-orange-600">Pending</Badge>;
            case 'rejected': return <Badge className="bg-red-500 hover:bg-red-600">Rejected</Badge>;
            default: return <Badge variant="outline">{status}</Badge>;
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Product Verification</h1>
                    <p className="text-muted-foreground mt-2">Verify and manage products uploaded by vendors</p>
                </div>
                <div className="flex gap-3">
                    <Badge
                        variant="outline"
                        className="text-lg px-4 py-2 cursor-pointer"
                        onClick={() => setActiveTab('all')}
                    >
                        Total: {totalProducts}
                    </Badge>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <Card
                    className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'all' ? 'ring-2 ring-blue-500 bg-blue-500/10' : 'hover:bg-muted/50'}`}
                    onClick={() => scrollToProducts('all')}
                >
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <ShoppingBag className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Total Products</p>
                            <h3 className="text-2xl font-bold text-foreground">{totalProducts}</h3>
                            <p className="text-xs text-blue-500 font-medium">All items in system</p>
                        </div>
                    </CardContent>
                </Card>

                <Card
                    className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'approved' ? 'ring-2 ring-green-500 bg-green-500/10' : 'hover:bg-muted/50'}`}
                    onClick={() => scrollToProducts('approved')}
                >
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <CheckCircle className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Approved</p>
                            <h3 className="text-2xl font-bold text-foreground">{approvedProducts.length}</h3>
                            <p className="text-xs text-green-500 font-medium">Live on app</p>
                        </div>
                    </CardContent>
                </Card>

                <Card
                    className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'pending' ? 'ring-2 ring-orange-500 bg-orange-500/10' : 'hover:bg-muted/50'}`}
                    onClick={() => scrollToProducts('pending')}
                >
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Package className="w-6 h-6 text-orange-500" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Pending Review</p>
                            <h3 className="text-2xl font-bold text-foreground">{pendingProducts.length}</h3>
                            <p className="text-xs text-orange-500 font-medium">Requires action</p>
                        </div>
                    </CardContent>
                </Card>

                <Card
                    className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'rejected' ? 'ring-2 ring-red-500 bg-red-500/10' : 'hover:bg-muted/50'}`}
                    onClick={() => scrollToProducts('rejected')}
                >
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <XCircle className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Rejected</p>
                            <h3 className="text-2xl font-bold text-foreground">{rejectedProducts.length}</h3>
                            <p className="text-xs text-red-500 font-medium">Not approved</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Search and Filter */}
            <Card className="glass-card border-border">
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                            <Button
                                variant={activeTab === 'all' ? 'default' : 'outline'}
                                onClick={() => setActiveTab('all')}
                                className={`whitespace-nowrap ${activeTab === 'all' ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
                            >
                                All Products
                            </Button>
                            <Button
                                variant={activeTab === 'approved' ? 'default' : 'outline'}
                                onClick={() => setActiveTab('approved')}
                                className={`whitespace-nowrap ${activeTab === 'approved' ? 'bg-green-600 hover:bg-green-700 text-white' : ''}`}
                            >
                                Approved
                            </Button>
                            <Button
                                variant={activeTab === 'pending' ? 'default' : 'outline'}
                                onClick={() => setActiveTab('pending')}
                                className={`whitespace-nowrap ${activeTab === 'pending' ? 'bg-orange-500 hover:bg-orange-600 text-white' : ''}`}
                            >
                                Pending
                            </Button>
                            <Button
                                variant={activeTab === 'rejected' ? 'default' : 'outline'}
                                onClick={() => setActiveTab('rejected')}
                                className={`whitespace-nowrap ${activeTab === 'rejected' ? 'bg-red-500 hover:bg-red-600 text-white' : ''}`}
                            >
                                Rejected
                            </Button>
                        </div>
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Products Grid */}
            <div
                ref={productsListRef}
                className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 transition-all duration-500 ${isGlowing ? 'ring-4 ring-primary/50 rounded-xl p-2 bg-primary/5' : ''}`}
            >
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Card key={product.id} className="glass-card border-border hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <div className="relative h-48 w-full overflow-hidden cursor-pointer" onClick={() => setViewingImage(product.image)}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute top-2 right-2">
                                    {getStatusBadge(product.status)}
                                </div>
                                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center group">
                                    <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                                </div>
                            </div>

                            <CardContent className="p-6 space-y-4">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <CardTitle
                                            className="text-lg text-foreground cursor-pointer hover:text-primary hover:underline transition-colors line-clamp-1"
                                            onClick={() => setSelectedProduct(product)}
                                        >
                                            {product.name}
                                        </CardTitle>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Store className="w-3 h-3 text-muted-foreground" />
                                        <span className="text-xs text-muted-foreground">{product.vendor}</span>
                                    </div>
                                </div>

                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Tag className="w-4 h-4" />
                                            <span>{product.category}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Box className="w-4 h-4" />
                                            <span>Stock: {product.stock}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IndianRupee className="w-4 h-4 text-green-500" />
                                        <span className="font-bold text-lg text-foreground">₹{product.price}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {product.description}
                                </p>

                                <div className="pt-2 flex gap-2">
                                    <Button
                                        variant="outline"
                                        className="flex-1 gap-2"
                                        onClick={() => setSelectedProduct(product)}
                                    >
                                        <Eye className="w-4 h-4" />
                                        Details
                                    </Button>
                                    {product.status === 'pending' && (
                                        <>
                                            <Button
                                                variant="default"
                                                className="flex-1 gap-2 bg-green-600 hover:bg-green-700 text-white"
                                                onClick={() => handleApprove(product.id)}
                                            >
                                                <CheckCircle className="w-4 h-4" />
                                                Approve
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                                onClick={() => handleReject(product.id)}
                                            >
                                                <XCircle className="w-4 h-4" />
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                        No products found matching your search.
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
                        <CardHeader className="p-0 overflow-hidden rounded-t-xl">
                            <div className="relative h-64 w-full cursor-pointer group" onClick={() => setViewingImage(selectedProduct.image)}>
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4">
                                    {getStatusBadge(selectedProduct.status)}
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <Eye className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                                </div>
                                <Button
                                    variant="secondary"
                                    size="icon"
                                    className="absolute top-4 left-4 rounded-full bg-black/50 hover:bg-black/70 text-white border-none z-10"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedProduct(null);
                                    }}
                                >
                                    <XCircle className="w-5 h-5" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-2">{selectedProduct.name}</h2>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Store className="w-4 h-4" />
                                    <span className="font-medium">{selectedProduct.vendor}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 p-4 bg-muted/30 rounded-xl border border-border/50">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Category</p>
                                    <p className="font-medium text-foreground flex items-center gap-2">
                                        <Tag className="w-4 h-4" /> {selectedProduct.category}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Price</p>
                                    <p className="font-medium text-foreground flex items-center gap-2">
                                        <IndianRupee className="w-4 h-4" /> ₹{selectedProduct.price}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Stock Available</p>
                                    <p className="font-medium text-foreground flex items-center gap-2">
                                        <Box className="w-4 h-4" /> {selectedProduct.stock} units
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Status</p>
                                    <p className="font-medium text-foreground capitalize">
                                        {selectedProduct.status}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-foreground mb-2">Product Description</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {selectedProduct.description}
                                </p>
                            </div>

                            {selectedProduct.status === 'pending' && (
                                <div className="flex gap-4 pt-4 border-t border-border">
                                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white h-12 text-lg" onClick={() => handleApprove(selectedProduct.id)}>
                                        <CheckCircle className="w-5 h-5 mr-2" />
                                        Approve Product
                                    </Button>
                                    <Button variant="destructive" className="flex-1 h-12 text-lg" onClick={() => handleReject(selectedProduct.id)}>
                                        <XCircle className="w-5 h-5 mr-2" />
                                        Reject Product
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Full Screen Image Viewer */}
            {viewingImage && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60] flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setViewingImage(null)}
                >
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full w-12 h-12"
                        onClick={() => setViewingImage(null)}
                    >
                        <XCircle className="w-8 h-8" />
                    </Button>
                    <img
                        src={viewingImage}
                        alt="Full screen view"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}
