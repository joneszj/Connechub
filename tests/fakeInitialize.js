const fake = require('faker');

module.exports = function (app) {
    Array.prototype.forEach2 = function (array) {
        var l = this.length;
        for (var i = 0; i < l; i++)a(this[i], i)
    }

    createCategories(app, createAndAssociateSubCategoriesToCategories(app));
}

function createCategories(app, callback) {
    var bulk = [
        { name: "Campus", slug: "campus" },
        { name: "Community", slug: "community" },
        { name: "Housing", slug: "housing" },
        { name: "H2F", slug: "h2f" },
        { name: "Free", slug: "free" },
        { name: "Jobs", slug: "jobs" },
        { name: "Talent", slug: "talent" },
        { name: "Personals", slug: "personals" },
        { name: "Sale", slug: "sale" },
        { name: "Services", slug: "services" },
        { name: "Unboxing", slug: "unboxing" }
    ];
    app.locals.db.models.Category.bulkCreate(bulk).then((result) => callback);
}

function createAndAssociateSubCategoriesToCategories(app, callback) {
    var finished = app.locals._.after(11, function () { createProfiles(app); });

    var bulk = [
        { name: "Activities & Events", slug: "activitiesevents" },
        { name: "Jobs", slug: "jobs" },
        { name: "Furniture", slug: "furniture" },
        { name: "Electronics", slug: "electronics" },
        { name: "Books", slug: "books" },
        { name: "Activities", slug: "activities" },
        { name: "Appliances", slug: "appliances" }
    ]
    app.locals.db.models.Subcategory.bulkCreate(bulk).then((result) => {
        app.locals.db.models.Category.findOne({ where: { name: "Campus" } }).then((category) => {
            for (var i = 0; i < result.length; i++) {
                var subcategory = result[i];
                subcategory.setCategory(category);
            }
            finished();
        });
    });

    bulk = [
        { name: "Churches", slug: "churches" },
        { name: "Promotions", slug: "promotions" },
        { name: "Announcements", slug: "announcements" },
        { name: "Artists & Musicians", slug: "artists" },
        { name: "Carpool & Rideshare", slug: "carpool" },
        { name: "Childcare & Babysitting", slug: "childcare" },
        { name: "Garage Sales", slug: "garagesale" },
        { name: "Lost & Found", slug: "lastfound" }
    ]
    app.locals.db.models.Subcategory.bulkCreate(bulk).then((result) => {
        app.locals.db.models.Category.findOne({ where: { name: "Community" } }).then((category) => {
            for (var i = 0; i < result.length; i++) {
                var subcategory = result[i];
                subcategory.setCategory(category);
            }
            finished();
        });
    });

    bulk = [
        { name: "Apartments", slug: "apartment" },
        { name: "Commercial", slug: "commercial" },
        { name: "Homes", slug: "homes" },
        { name: "Rentals", slug: "rentals" },
        { name: "Vacation", slug: "vacation" },
        { name: "Condos", slug: "condos" },
        { name: "Farms", slug: "farms" },
        { name: "Lands", slug: "lands" },
        { name: "Ranches", slug: "ranches" },
        { name: "Manufactured Homes", slug: "manufacturinghomes" },
        { name: "Townhomes", slug: "townhomes" }
    ]
    app.locals.db.models.Subcategory.bulkCreate(bulk).then((result) => {
        app.locals.db.models.Category.findOne({ where: { name: "Housing" } }).then((category) => {
            for (var i = 0; i < result.length; i++) {
                var subcategory = result[i];
                subcategory.setCategory(category);
            }
            finished();
        });
    });

    bulk = [
        { name: "Odd Items", slug: "odditems" },
        { name: "The Rarest", slug: "rare" },
        { name: "Collectables", slug: "collectables" },
        { name: "Antiques", slug: "antiques" }
    ]
    app.locals.db.models.Subcategory.bulkCreate(bulk).then((result) => {
        app.locals.db.models.Category.findOne({ where: { name: "H2F" } }).then((category) => {
            for (var i = 0; i < result.length; i++) {
                var subcategory = result[i];
                subcategory.setCategory(category);
            }
            finished();
        });
    });

    bulk = [
        { name: "Sale Anything", slug: "anything" },
        { name: "Campus Life", slug: "campuslife" },
        { name: "Events & Community", slug: "eventscommunity" },
        { name: "Jobs pro bono", slug: "probono" },
        { name: "Hard to Find", slug: "hardtofind" }
    ]
    app.locals.db.models.Subcategory.bulkCreate(bulk).then((result) => {
        app.locals.db.models.Category.findOne({ where: { name: "Free" } }).then((category) => {
            for (var i = 0; i < result.length; i++) {
                var subcategory = result[i];
                subcategory.setCategory(category);
            }
            finished();
        });
    });

    bulk = [
        { name: "Accounting", slug: "accounting" },
        { name: "Admin/Clerical", slug: "adminclerical" },
        { name: "Automotive", slug: "automotive" },
        { name: "Banking", slug: "banking" },
        { name: "Biotech", slug: "biotech" },
        { name: "Business Development", slug: "businessdevelopment" },
        { name: "Business Opportunity", slug: "businessopportunity" },
        { name: "Construction", slug: "construction" },
        { name: "Consultant", slug: "consultant" },
        { name: "Customer Service", slug: "customerservice" },
        { name: "Design", slug: "design" },
        { name: "Distribution/Shipping", slug: "distribution" },
        { name: "Education", slug: "education" },
        { name: "Engineering", slug: "engineering" },
        { name: "Entry Level", slug: "entrylevel" },
        { name: "Executive", slug: "executive" },
        { name: "Facilities", slug: "facilities" },
        { name: "Finance", slug: "finance" },
        { name: "Franchise", slug: "franchise" },
        { name: "General Business", slug: "generalbusiness" },
        { name: "General Labor", slug: "generallabor" },
        { name: "Government/Federal", slug: "government" },
        { name: "Grocery Stores", slug: "grocerystore" },
        { name: "Health Care", slug: "healthcare" },
        { name: "Hospitality/Hotel", slug: "hopsitality" },
        { name: "Human Resources", slug: "humanresources" },
        { name: "Journalism/Newspaper", slug: "journalism" },
        { name: "Information Technology", slug: "informationtechnology" },
        { name: "Installation", slug: "installation" },
        { name: "Insurance", slug: "insurance" },
        { name: "Inventory", slug: "inventory" },
        { name: "Legal", slug: "legal" },
        { name: "Legal Admin", slug: "legaladmin" },
        { name: "Maintenance/Repair", slug: "maintenance" },
        { name: "Management", slug: "management" },
        { name: "Manufacturing", slug: "manufacturing" },
        { name: "Marketing", slug: "marketing" },
        { name: "Media", slug: "media" },
        { name: "Nonprofit", slug: "nonprofit" },
        { name: "Nurse", slug: "nurse" },
        { name: "Other", slug: "other" },
        { name: "Pharmaceutical", slug: "pharmaceutical" },
        { name: "Procurement", slug: "procurement" },
        { name: "Professional Services", slug: "professionalservices" },
        { name: "Purchasing", slug: "purchasing" },
        { name: "QA/Quality Control", slug: "qa" },
        { name: "Real Estate", slug: "realestate" },
        { name: "Research", slug: "research" },
        { name: "Restaurant", slug: "restaurant" },
        { name: "Retail", slug: "retail" },
        { name: "Sales", slug: "sales" },
        { name: "Science", slug: "science" },
        { name: "Skilled Labor - Trades", slug: "labor" },
        { name: "Social Services", slug: "socialservices" },
        { name: "Strategy/Planning", slug: "strategy" },
        { name: "Supply Chain", slug: "supplychain" },
        { name: "Telecommunications", slug: "telecommunications" },
        { name: "Training", slug: "training" },
        { name: "Transportation", slug: "transportation" },
        { name: "Veterinary Services", slug: "veterinaryservices" },
        { name: "Warehouse", slug: "warehouse" }
    ]
    app.locals.db.models.Subcategory.bulkCreate(bulk).then((result) => {
        app.locals.db.models.Category.findOne({ where: { name: "Jobs" } }).then((category) => {
            for (var i = 0; i < result.length; i++) {
                var subcategory = result[i];
                subcategory.setCategory(category);
            }
            finished();
        });
    });

    bulk = [
        { name: "Accounting", slug: "accounting" },
        { name: "Admin/Clerical", slug: "adminclerical" },
        { name: "Automotive", slug: "automotive" },
        { name: "Banking", slug: "banking" },
        { name: "Biotech", slug: "biotech" },
        { name: "Business Development", slug: "businessdevelopment" },
        { name: "Business Opportunity", slug: "businessopportunity" },
        { name: "Construction", slug: "construction" },
        { name: "Consultant", slug: "consultant" },
        { name: "Customer Service", slug: "customerservice" },
        { name: "Design", slug: "design" },
        { name: "Distribution/Shipping", slug: "distribution" },
        { name: "Education", slug: "education" },
        { name: "Engineering", slug: "engineering" },
        { name: "Entry Level", slug: "entrylevel" },
        { name: "Executive", slug: "executive" },
        { name: "Facilities", slug: "facilities" },
        { name: "Finance", slug: "finance" },
        { name: "Franchise", slug: "franchise" },
        { name: "General Business", slug: "generalbusiness" },
        { name: "General Labor", slug: "generallabor" },
        { name: "Government/Federal", slug: "government" },
        { name: "Grocery Stores", slug: "grocerystore" },
        { name: "Health Care", slug: "healthcare" },
        { name: "Hospitality/Hotel", slug: "hopsitality" },
        { name: "Human Resources", slug: "humanresources" },
        { name: "Journalism/Newspaper", slug: "journalism" },
        { name: "Information Technology", slug: "informationtechnology" },
        { name: "Installation", slug: "installation" },
        { name: "Insurance", slug: "insurance" },
        { name: "Inventory", slug: "inventory" },
        { name: "Legal", slug: "legal" },
        { name: "Legal Admin", slug: "legaladmin" },
        { name: "Maintenance/Repair", slug: "maintenance" },
        { name: "Management", slug: "management" },
        { name: "Manufacturing", slug: "manufacturing" },
        { name: "Marketing", slug: "marketing" },
        { name: "Media", slug: "media" },
        { name: "Nonprofit", slug: "nonprofit" },
        { name: "Nurse", slug: "nurse" },
        { name: "Other", slug: "other" },
        { name: "Pharmaceutical", slug: "pharmaceutical" },
        { name: "Procurement", slug: "procurement" },
        { name: "Professional Services", slug: "professionalservices" },
        { name: "Purchasing", slug: "purchasing" },
        { name: "QA/Quality Control", slug: "qa" },
        { name: "Real Estate", slug: "realestate" },
        { name: "Research", slug: "research" },
        { name: "Restaurant", slug: "restaurant" },
        { name: "Retail", slug: "retail" },
        { name: "Sales", slug: "sales" },
        { name: "Science", slug: "science" },
        { name: "Skilled Labor - Trades", slug: "labor" },
        { name: "Social Services", slug: "socialservices" },
        { name: "Strategy/Planning", slug: "strategy" },
        { name: "Supply Chain", slug: "supplychain" },
        { name: "Telecommunications", slug: "telecommunications" },
        { name: "Training", slug: "training" },
        { name: "Transportation", slug: "transportation" },
        { name: "Veterinary Services", slug: "veterinaryservices" },
        { name: "Warehouse", slug: "warehouse" }
    ]
    app.locals.db.models.Subcategory.bulkCreate(bulk).then((result) => {
        app.locals.db.models.Category.findOne({ where: { name: "Talent" } }).then((category) => {
            for (var i = 0; i < result.length; i++) {
                var subcategory = result[i];
                subcategory.setCategory(category);
            }
            finished();
        });
    });

    bulk = [
        { name: 'Strictly Platonic', slug: 'strictlyplatonic' },
        { name: 'Women / Women', slug: 'womenwomen' },
        { name: 'Women / Men', slug: 'womenmen' },
        { name: 'Men / Women', slug: 'menwomen' },
        { name: 'Men / Men', slug: 'menmen' },
        { name: 'Misc Romance', slug: 'miscromance' },
        { name: 'Casual Encounters', slug: 'casualencounters' },
        { name: 'Missed Connections', slug: 'missedconnections' },
        { name: 'Purely about Sex', slug: 'purelyaboutsex' }
    ]
    app.locals.db.models.Subcategory.bulkCreate(bulk).then((result) => {
        app.locals.db.models.Category.findOne({ where: { name: "Personals" } }).then((category) => {
            for (var i = 0; i < result.length; i++) {
                var subcategory = result[i];
                subcategory.setCategory(category);
            }
            finished();
        });
    });

    bulk = [
        { name: 'Home & Garden', slug: 'homegarden' },
        { name: 'Clothing & Accessories', slug: 'clothingaccessories' },
        { name: 'Flowers & Gifts', slug: 'flowersgifts' },
        { name: 'Computers', slug: 'computers' },
        { name: 'Electronics', slug: 'electronics' },
        { name: 'Fragrances & Beauty', slug: 'fragrancesbeauty' },
        { name: 'Jewelry & Watches', slug: 'jewelrywatches' },
        { name: 'Sports & Outdoors', slug: 'sportsoutdoors' },
        { name: 'Toys & Baby', slug: 'toysbaby' },
        { name: 'Automotive', slug: 'automotive' },
        { name: 'DVD', slug: 'dvd' },
        { name: 'Music', slug: 'music' },
        { name: 'Books', slug: 'books' },
        { name: 'Appliances', slug: 'appliances' },
        { name: 'Video Games', slug: 'video Games' },
        { name: 'Industrial', slug: 'industrial' },
        { name: 'Tickets', slug: 'tickets' },
        { name: 'Musical Instruments', slug: 'musicalinstruments' },
        { name: 'Pets', slug: 'pets' }
    ]
    app.locals.db.models.Subcategory.bulkCreate(bulk).then((result) => {
        app.locals.db.models.Category.findOne({ where: { name: "Sale" } }).then((category) => {
            for (var i = 0; i < result.length; i++) {
                var subcategory = result[i];
                subcategory.setCategory(category);
            }
            finished();
        });
    });

    bulk = [
        { name: 'Accountant', slug: 'accountant' },
        { name: 'Architecture', slug: 'architecture' },
        { name: 'Artists', slug: 'artists' },
        { name: 'Barber', slug: 'barber' },
        { name: 'Beauty Salons', slug: 'beautysalons' },
        { name: 'Building Remodelling', slug: 'buildingremodelling' },
        { name: 'Business Planner', slug: 'businessplanner' },
        { name: 'Taxi Cab/UBER', slug: 'taxiuber' },
        { name: 'Car Rental', slug: 'carrental' },
        { name: 'Chef', slug: 'chef' },
        { name: 'Cleaning Services / Maids', slug: 'cleaningservicesmaids' },
        { name: 'Home Decor', slug: 'homedecor' },
        { name: 'Fitness Instructor', slug: 'fitnessinstructor' },
        { name: 'Elderly Care', slug: 'elderlycare' },
        { name: 'IT / Programmer', slug: 'programmer' },
        { name: 'Grant Writer', slug: 'grantwriter' },
        { name: 'Health Spa', slug: 'healthspa' },
        { name: 'Lawn Care', slug: 'lawncare' },
        { name: 'Legal Services', slug: 'legalservices' },
        { name: 'Limousine', slug: 'limousine' },
        { name: 'Repair / Handyman', slug: 'repairhandyman' },
        { name: 'Marketing Firm', slug: 'marketingfirm' },
        { name: 'Non Profit', slug: 'nonprofit' },
        { name: 'Home Security', slug: 'homesecurity' },
        { name: 'Structural Engineer', slug: 'structuralengineering' },
        { name: 'Home Remodelling', slug: 'homeremodelling' },
        { name: 'Auto Repair', slug: 'autorepair' },
        { name: 'Tutoring/Education', slug: 'tutoringeducation' },
        { name: 'Website Designer', slug: 'websitedesigner' },
        { name: 'Plumber', slug: 'plumber' },
        { name: 'Appliance Repair', slug: 'appliancerepair' },
        { name: 'Dog Walker', slug: 'dogwalker' },
        { name: 'Pressure Washing', slug: 'pressurewashing' },
        { name: 'Computer Repair', slug: 'computerrepair' },
        { name: 'Auto Insurance', slug: 'autoinsurance' },
        { name: 'Small Construction', slug: 'smallconstruction' },
        { name: 'Life Insurance', slug: 'lifeinsurance' },
        { name: 'Mortgage Refinance', slug: 'mortgagerefinance' },
        { name: 'Photographers', slug: 'photographers' },
        { name: 'Financial Planner', slug: 'financialplanner' },
        { name: 'Music Dj & Bands', slug: 'music' },
        { name: 'Moving Company', slug: 'movingcompany' },
        { name: 'Dentist', slug: 'dentist' },
        { name: 'Doctors', slug: 'doctors' },
        { name: 'Party Bus', slug: 'partybus' },
        { name: 'Pawn Shops', slug: 'pawnshops' },
        { name: 'Gun Shops', slug: 'gunshops' },
        { name: 'Laundromat', slug: 'laundromat' },
        { name: 'Massage Therapists', slug: 'massagetherapists' },
        { name: 'Garbage Collection', slug: 'garbagecollection' },
        { name: 'Churches', slug: 'churches' },
        { name: 'Pet Grooming', slug: 'petgrooming' },
        { name: 'Restaurants', slug: 'restaurants' },
        { name: 'Pest Control Services', slug: 'pestcontrol' },
        { name: 'Dumpster Rental', slug: 'dumpsterrental' },
        { name: 'Reception Halls', slug: 'receptionhalls' },
        { name: 'Roofing Contractors', slug: 'roofingcontractors' },
        { name: 'Tow Truck Service', slug: 'towtruckservice' },
        { name: 'Cash Services', slug: 'cashservices' }
    ]
    app.locals.db.models.Subcategory.bulkCreate(bulk).then((result) => {
        app.locals.db.models.Category.findOne({ where: { name: "Services" } }).then((category) => {
            for (var i = 0; i < result.length; i++) {
                var subcategory = result[i];
                subcategory.setCategory(category);
            }
            finished();
        });
    });

    bulk = [
        { name: 'Home & Garden', slug: 'homegarden' },
        { name: 'Clothing & Accessories', slug: 'clothingaccessories' },
        { name: 'Computers', slug: 'computers' },
        { name: 'Electronics', slug: 'electronics' },
        { name: 'Jewelry & Watches', slug: 'jewelrywatches' },
        { name: 'Sports & Outdoors', slug: 'sportsoutdoors' },
        { name: 'Toys & Baby', slug: 'toysbaby' },
        { name: 'Appliances', slug: 'appliances' },
        { name: 'Musical Instruments', slug: 'musicalinstruments' }
    ];
    app.locals.db.models.Subcategory.bulkCreate(bulk).then((result) => {
        app.locals.db.models.Category.findOne({ where: { name: "Unboxing" } }).then((category) => {
            for (var i = 0; i < result.length; i++) {
                var subcategory = result[i];
                subcategory.setCategory(category);
            }
            finished();
        });
    });
}

function createProfiles(app) {
    app.locals.db.models.Subcategory.findAndCountAll().then((result) => {
        for (var y = 0; y < 10; y++) {
            app.locals.db.models.Profile.create({
                email: fake.internet.email(),
                username: fake.internet.userName(),
                bio: fake.lorem.paragraphs(3),
                oauthid: fake.random.uuid(),
                access_token: fake.random.uuid(),
                avatarPath: "http://lorempixel.com/400/200"
            }).then((profile) => {
                app.locals.db.models.Address.create({
                    address1: fake.address.streetAddress(),
                    address2: fake.address.streetName(),
                    address3: fake.address.streetPrefix(),
                    address4: fake.address.streetSuffix(),
                    locality: fake.random.locale(),
                    region: fake.address.state(),
                    postcode: fake.address.zipCode(),
                    country: fake.address.country()
                }).then((address) => {
                    profile.setAddress(address).then(() => {
                        app.locals.db.models.Contact.create({
                            email: fake.internet.email(),
                            phone: fake.phone.phoneNumber(),
                            text: fake.random.boolean()
                        }).then((contact) => {
                            profile.setContact(contact).then(() => {
                                createPosts(app, profile, result);
                            }).catch((err) => { });
                        }).catch((err) => { });
                    }).catch((err) => { });
                }).catch((err) => { })
            }).catch((err) => { });
        }
    }).catch((err) => { });
}

function createPosts(app, profile, result) {
    for (var i = 0; i < app.locals._.random(0, 50); i++) {
        app.locals.db.models.Post.create({
            name: fake.commerce.product(),
            description: fake.lorem.sentence(10),
            price: fake.commerce.price(10),
        }).then((post) => {
            profile.addPost(post).then(() => {
                post.setSubcategory(result.rows[app.locals._.random(1, result.count)]).then(() => {
                    app.locals.db.models.Address.create({
                        address1: fake.address.streetAddress(),
                        address2: fake.address.streetName(),
                        address3: fake.address.streetPrefix(),
                        address4: fake.address.streetSuffix(),
                        locality: fake.random.locale(),
                        region: fake.address.state(),
                        postcode: fake.address.zipCode(),
                        country: fake.address.country()
                    }).then((postAddress) => {
                        post.setAddress(postAddress).then(() => {
                            app.locals.db.models.Contact.create({
                                email: fake.internet.email(),
                                phone: fake.phone.phoneNumber(),
                                text: fake.random.boolean()
                            }).then((postContact) => {
                                post.setContact(postContact).then(() => {
                                    creatVotesAndImpressions(app, post);
                                }).catch((err) => { });
                            }).catch((err) => { });
                        }).catch((err) => { });
                    }).catch((err) => { });
                }).catch((err) => { });
            }).catch((err) => { });
        }).catch((err) => { });
    }
}

function creatVotesAndImpressions(app, post) {
    for (var i = 0; i < app.locals._.random(0,15); i++) {
        app.locals.db.models.Vote.create({
            
        }).then().catch((err) => {})
    }
}